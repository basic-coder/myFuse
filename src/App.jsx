import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { useState } from 'react'
import Footer from './components/Footer/Footer.jsx'

function App() {

  const [navActive, setNavActive] = useState()

  return (
    <BrowserRouter>
      <div className='main'>

        <Navbar setNavActive={setNavActive} navActive={navActive} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <div className={`overlay ${navActive ? 'active' : ''}`}></div>
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
