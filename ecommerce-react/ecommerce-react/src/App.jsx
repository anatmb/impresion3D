import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      
      </div>
    </>
  )
}

export default App
