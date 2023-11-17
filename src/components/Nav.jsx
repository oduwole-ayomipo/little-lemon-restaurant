import React from 'react'
import Logo from '../images/Logo.svg'
import '../styles/Nav.css'

function Nav() {
  return (
    <nav>
      <div className='Logo'>
        <img src={Logo} alt="Little Lemon" />
      </div>

      <ul className='nav-links'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
    
  )
}

export default Nav