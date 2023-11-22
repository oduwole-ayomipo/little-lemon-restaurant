import React from 'react'
import Logo from '../images/Logo.svg'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {
  return (
    <nav>
      <div className='Logo'>
        <img src={Logo} alt="Little Lemon" />
      </div>

      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav