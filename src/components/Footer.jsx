import React from 'react'
import { Link } from 'react-router-dom'
import chef from '../images/chef.jpg'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div>
        <div className='footer-lls'></div>
        <div className='footer-lls-overlay'>Bon Appétit!</div>
      </div>
      
      <div className='footer-content'>
        <img src={chef}  alt="Little Lemon Chef" className='footer-chef-img'/>
        <div className='footer-column'>
          <div className='footer-heading'>
            DoorMat <br/> Navigation
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className='footer-column '>
          <div className='footer-heading'>
            Social Media
          </div>
          <ul>
            <li><Link to="/">Instagram</Link></li>
            <li><Link to="/about">LinkedIn</Link></li>
            <li><Link to="/menu">Twitter</Link></li>
            <li><Link to="/reservations">Facebook</Link></li>
            <li><Link to="/order-online">Telegram</Link></li>
          </ul>
        </div>
        <div className='footer-column '>
          <div className='footer-heading'>
            Contact
          </div>
          <ul>
            <li><Link to="/">Address</Link></li>
            <li><Link to="/about">Telephone</Link></li>
            <li><Link to="/menu">Email</Link></li>
          </ul>
        </div>
      </div>      
    </footer>
  )
}

export default Footer