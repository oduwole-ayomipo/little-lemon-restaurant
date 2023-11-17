import '../styles/Header.css'
import LLS from '../images/restaurant.jpg'
import React from 'react'

function Header() {
  return (
    <header>
      <div className='header-title'>
          <h1>Little Lemon</h1>
      </div>

      <div className='header-content'>
        <div className='header-information'>
          <h5>Chicago</h5>
          <h3>
            Little lemon is a family owned Mediterranean restaurant. We focus on the traditional and native recipes served with a modern twist.
          </h3>
          <div className='header-btn'>
            <button>Reserve a Table</button>
          </div>
        </div>
        <img src={LLS} alt=""  className='header-right-img'/>
      </div>

    </header>
  )
}

export default Header