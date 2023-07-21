import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// app.jsx css`in app.jsx a yeni ozune baglayirsan
import './App.css'

// komponentler
import Navbar from './components/Navbar'

// react spinners loader
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// react router dom
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import PartnyorCompanis from './pages/PartnyorCompanis'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'








function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
    setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
    <div className='intelligence'>

    {loading ?(
      <div className='myloader'>

        <ClimbingBoxLoader
        color={"#3660A7"}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
      </div>
      ):(
        
        <BrowserRouter>
     <Navbar />
    
        <Routes>
           <Route path='/' element={<Home/>} /> 
           <Route path='Partnyor-companies' element={<PartnyorCompanis/>} />
           <Route path='*' element={<NotFound/>} />
           <Route path='Contact' element={<Contact/>} />
        </Routes>

      </BrowserRouter>
    )} 
    </div>
    </>
  )
}

export default App
