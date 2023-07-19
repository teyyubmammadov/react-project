import React, {useRef} from 'react'
import Logo from '../assets/image/logo.svg'
import Button from './Button'
import {AiOutlineBars} from 'react-icons/ai'
import {ImCross} from "react-icons/im";

import { Link } from 'react-router-dom';





const Navbar = () => {
  
  const navbarButonu = useRef()
  const overlayDivi = useRef()
  
  const overlayiAc = () => {
    overlayDivi.current.classList.add('navbar-open')
  }
  
  const removeNavbar = () => {
    overlayDivi.current.classList.remove('navbar-open')
  }


  return (
    <>
    
    <div className="ovarley " ref={overlayDivi}>
     <button  onClick={removeNavbar} className='cross-icon'> < ImCross /> </button>

      <div className="nav-links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>

    </div>

    <nav className="navbar navbar-expand-lg wrapper">
    <div className="container-fluid">
      <a className='navbar-brand' href="#">
        <img src={Logo} alt="" />
      </a>
      <button onClick={overlayiAc}n  className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <AiOutlineBars />
      </button>
      <div className="collapse navbar-collapse ps-4" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="Partnyor-companies">Partnyor Companies</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>
        <Button icindekiYazi='Sign in' klassAdi='btn btn-primary' />
      </div>
    </div>
  </nav>
  </>
  )
}

// control H ile classi className olaraq deyisdik ve tek teqleri sonda slash ile bagladik

export default Navbar