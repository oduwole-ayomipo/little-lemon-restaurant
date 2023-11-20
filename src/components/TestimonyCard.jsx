import React from 'react'
import '../styles/FoodCard.css'
import '../App.css'

function TestimonyCard(
    {
    FoodImg}
) {
  return (
    <div className='testimony-card'>
       <h4>Max Reed</h4>
        <div className='card-description'>
            <img src={FoodImg} alt="" className='card-image' />
        </div>
        <p>“The blend of traditional Mediterranean recipes creates a unique and unforgettable dining experience.”</p>
    </div>
  )
}

export default TestimonyCard