/* eslint-disable no-undef */
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigator = useNavigate();


  async function RegisterSubmit(e) {

    e.preventDefault();
    console.log(e);
    try {
      const res = await Axios.post("http://localhost:3000/api/register", {
        username,
        email,
        password,
      });
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log(res);

      setUsername('');
      setEmail('');
      setPassword('');
      setError(false);
      navigator('/login');
    } catch (err) {
      setError(true);
      console.log(err);
    }

  }


  return (


    <div>
      <Navbar />
      <div className='w-full flex justify-center items-center   h-[80vh]'>
        {/* <img className="md:h-full flex-shrink h-90 shadow-lg box-sizing object-full" src="https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Book image" /> */}
        <div className='flex flex-coljustify-center items-center space-y-2 w-[80%] md:w-[25%] '>
          <div className=' bg-yellow-300  shadow-lg bg-origin-border'>
            <h1 className=" font-bold mt-7 mb-4 md:mb-7 text-2xl text-center md:text-2xl gap-3">Login To Your Account</h1>
            <form onSubmit={RegisterSubmit} >
              <h3 className='md:ml-20 mb-3 md:mb-3 text-lg font-bold'>Username</h3>
              <input
                type="username"
                placeholder="username"
                value={username}
                className='p-2 w-80 mb-2  md:ml-20 border-2 border-black rounded-lg '
                onChange={(e) => setUsername(e.target.value)}
              />
              <h3 className='md:ml-20  mb-2 md:mb-3 text-lg font-bold '>Email</h3>
              <input
                type="Email"
                placeholder="Email"
                value={email}
                className='p-2 w-80 mb-5 md:ml-20 border-2 border-black rounded-lg'
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className='md:ml-20  mb-2 md:mb-3 text-lg font-bold '>Password</h3>
              <input
                type="Password"
                placeholder="Password"
                value={password}
                className='p-2 w-80 mb-5 md:ml-20 border-2 border-black rounded-lg'
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className='md:w-80 w-80 md:ml-20  bg-black p-3 hover:bg-black-200  shadow-lg shadow-white-500/50 text-white px-4 py-2 rounded font-bold  text-lg '
              >Login</button>

              <p className=' md:mb-10   md:ml-20'><span className="font-bold ">Create New here?</span> <span className="cursor-pointer text-gray-700 pl-2" ><Link to='/Register'>Register</Link> </span></p>
              {error && <h3 className='text-red-500 mb-10 ml-20 text-center'>something went wrong</h3>}
            </form>
          </div>


        </div>


      </div>
    </div>
  );

};


export default Register;
