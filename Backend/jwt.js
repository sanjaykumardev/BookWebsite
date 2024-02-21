const jwt = require("jsonwebtoken");


function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'Token is required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' });
    req.user = decoded;
    next();
  });
}

// Example of protected route
// app.get('/protected-route', verifyToken, (req, res) => {
//   res.json({ message: 'This is a protected route', user: req.user });
// });


module.exports =  verifyToken;