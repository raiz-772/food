import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Login/>
    </div>
  )
}

export default App
