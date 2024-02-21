import {Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Login from "./pages/login"
import Resgister from "./pages/register"

function App() {
  

  return (
    <>
      <Routes>
      <Route exact path="/"  element={<Home />}/>
      <Route exact path="/login"  element={<Login />}/>
      <Route exact path="/register"  element={<Resgister />}/>
      </Routes>
    </>
  )
}

export default App
