import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './pages/Navbar'
import LoginProvider from "./LoginContext"
const App = () => {
  return (
    <div>
      <LoginProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </div>
  )
}

export default App;
