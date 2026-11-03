import React from 'react'
import {BrowserRouter, Route, Routes,Link} from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/Aboutus/About'
import Contact from './components/Contactus/Contact'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/Login' element={<Login/>}/>

      </Routes>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/navbar">Navbar</Link>

      </nav>
      </BrowserRouter>
    </div>
  )
}

export default App
