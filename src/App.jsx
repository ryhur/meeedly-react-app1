import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import Home from './pages/Home'
import About  from './pages/About'
import Settings from './pages/Settings'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
