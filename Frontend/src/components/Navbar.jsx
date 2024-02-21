import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  const navigator = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log(isLoggedIn);
    setIsLoggedIn(false);
    navigator('/');
  };

  return (
    <nav className="bg-yellow-300 p-4 shadow-lg">
      <div className="container mx-auto md:mt-2 md:mb-2 flex justify-between items-center">
        <Link to="/" className="text-black text-3xl font-bold">
          Book-Store
        </Link>

        <div className="hidden md:flex space-x-12 ml-20">
          <Link to="/" className="text-black font-bold">
            Home
          </Link>
          <Link to="/about" className="text-balck font-bold ">
            About
          </Link>
          <Link to="/services" className="text-black font-bold">
            Services
          </Link>
          <Link to="/contact" className="text-black  font-bold">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 ml-20">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-white shadow-lg shadow-balck-500/50 text-black px-4 py-2 rounded">
              Logout
              <Link to='/'></Link> </button>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-white shadow-lg shadow-black-500/50 ml-10 font-bold text-black px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-white shadow-lg shadow-black-500/50 font-bold text-black px-4 py-2 rounded">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          {/* Mobile menu toggle button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
