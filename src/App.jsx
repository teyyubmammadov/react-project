
import 'bootstrap/dist/css/bootstrap.min.css'
// app.jsx css`in app.jsx a yeni ozune baglayirsan
import './App.css'

// komponentler
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import PartnyorCompanies from './components/PartnyorCompanies'
import ApplySection from './components/ApplySection'
import Mukafatlar from './components/Mukafatlar'

// react router dom
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import PartnyorCompanis from './pages/PartnyorCompanis'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'



function App() {


  return (
    <>
    <BrowserRouter>
     <Navbar />
     
      
        <Routes>

           <Route path='/' element={<Home/>} /> 
           <Route path='Partnyor-companies' element={<PartnyorCompanis/>} />
           <Route path='*' element={<NotFound/>} />
           <Route path='Contact' element={<Contact/>} />
      

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
