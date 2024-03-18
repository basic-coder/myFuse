import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'

function App() {

  return (
    <BrowserRouter>
      <div className='main'>
        
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
