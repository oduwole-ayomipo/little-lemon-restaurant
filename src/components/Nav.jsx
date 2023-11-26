import React from 'react'
import Logo from '../images/Logo.svg'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <div className='Logo'>
        <img src={Logo} alt="Little Lemon" />
      </div>

      <ul className='nav-links'>
        <li><NavLink to="/" activeClassName="active" onClick={handleNavLinkClick}>Home</NavLink></li>

        <li><NavLink to="/about" activeClassName="active" onClick={handleNavLinkClick}>About</NavLink></li>

        <li><NavLink to="/menu" activeClassName="active" onClick={handleNavLinkClick}>Menu</NavLink></li>

        <li><NavLink to="/reservations" activeClassName="active" onClick={handleNavLinkClick}>Reservations</NavLink></li>

        <li><NavLink to="/order-online" activeClassName="active" onClick={handleNavLinkClick}>Order Online</NavLink></li>

        <li><NavLink to="/login" activeClassName="active" onClick={handleNavLinkClick}>Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav