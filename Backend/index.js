const express = require("express");
const mysql = require("mysql2")
const app = express();
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv");
dotenv.config();

//?server port
const port = 3000;


app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));


// connection for database
const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sanjay007",
  database: "booklibary"
});

// ? fectch data -register
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    connection.query(
      'INSERT INTO useinfo (username, password, email) VALUES (?, ?, ?)',
      [username, hashedPassword, email],
      (err, result) => {
        if (err) {
          console.error('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log('Data inserted into MySQL successfully:', result);
          res.json('Successfully registered');
        }
      }
    );
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//? login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database to retrieve user data
    connection.query(
      'SELECT * FROM useinfo WHERE email = ?', [email],
      async (err, result) => {
        if (err) {
          console.error('Error querying data from MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          if (result.length > 0) {
            // User found, compare hashed password
            const user = result[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
              // Generate JWT token
              const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                expiresIn: '1h'
              });
              res.json({ message: 'Login successful', token, email: user.email });
              console.log('Data retrieved from MySQL successfully:', user);
            } else {
              res.status(401).json({ error: 'Invalid username or password' });
            }
          } else {
            res.status(401).json({ error: 'Invalid username or password' });
          }
        }
      }
    );
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// app.get('/book',(req,res)=>{
//   connection.query(" SELECT * FROM  book", (err, res)=>{
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.json(res);
//       console.log(res);
//     }
//   });
// });


//? BOOK 
app.get('/books', (req, res) => {
  // MySQL query to select all books from the 'book' table
  const query = 'SELECT * FROM book';

  // Execute the SQL query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching books data from MySQL:', err);
      res.status(500).json({ error: 'Error fetching books data from MySQL' });
      return;
    }
    console.log('Books data fetched from MySQL:', results);
    res.status(200).json(results); // Send the fetched books data to the frontend
  });
});



//? to database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});


//? server connection
app.listen(port, () => {
  console.log(`connected to port ${port}`)
});
