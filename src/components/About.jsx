import '../styles/Header.css'
import LLS from '../images/restaurant.jpg'
import React from 'react'

function About() {
  return (
    <div className='about-section'>
      <div className='about-title'>
          <h1>Little Lemon</h1>
          <h5>Chicago</h5>
      </div>

      <div className='about-content'>
        <div className='about-information'>
          <h3>
             At Little Lemon, we invite you to embark on a culinary journey that transcends time, where the essence of the Mediterranean comes to life in every bite. Join us for a celebration of tradition, innovation, and the joy of sharing delicious meals with the ones you love.
          </h3>
          <img src={LLS} alt=""  className='about-right-img'/>
        </div>
      </div>
    </div>
  )
}

export default About