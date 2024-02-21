
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';



function login() {

  const user = false;
  return (
    <div>
      <Navbar />
      <div className='w-full flex justify-center items-center  h-[80vh]'>
        <div className='flex flex-coljustify-center items-center space-y-2 w-[80%] md:w-[25%] '>
          <div className=' bg-yellow-300  shadow-lg bg-origin-border'>
            <h1 className=" font-bold mt-7 mb-4 md:mb-7 text-2xl text-center md:text-2xl gap-3">Login To Your Account</h1>
            <form className='  ' >



              <h3 className='md:ml-20 mb-3 md:mb-3 text-lg font-bold'>Email</h3>
              <input
                type="email"
                placeholder="Email"
                // value={email}
                className='p-2 w-80 mb-4  md:ml-20 border-2 border-black rounded-lg '
              // onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className='md:ml-20  mb-2 md:mb-3 text-lg font-bold '>Password</h3>
              <input
                type="password"
                placeholder="Password"
                // value={password}
                className='p-2 w-80 mb-10 md:ml-20 border-2 border-black rounded-lg'
              // onChange={(e) => setPassword(e.target.value)}
              />

              <button className='md:w-80 w-80 md:ml-20  bg-black p-3 hover:bg-black-200  shadow-lg shadow-white-500/50 text-white px-4 py-2 rounded font-bold  text-lg '
              >Login</button>

              <p className='mt-2 md:mb-7 md:ml-20'><span className="font-bold ">Create New here?</span> <span className="cursor-pointer text-gray-700 pl-2" ><Link to='/Register'>Register</Link> </span></p>
              {user && <h3 className='text-red-500 mb-10   ml-20 text-center'>something went wrong</h3>}
            </form>
          </div>


        </div>


      </div>
    </div>
  )
}

export default login
