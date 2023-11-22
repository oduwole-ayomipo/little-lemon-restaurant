import React from 'react'
import '../styles/FoodCard.css'
import starratingsone from "../images/starratings-one.svg"
import imgone from "../images/img-one.jpg"
import '../App.css'

function TestimonyCard() {
  return (
    <div className='testimony-card'>
       <h4>Max Reed</h4>
        <div className='card-description testimony'>
            <img src={imgone} width={75} alt="" className='card-image testimony-image' />
            <img src={starratingsone} width={90} alt="" />   
        </div>
        <p>“The blend of traditional Mediterranean recipes creates a unique and unforgettable dining experience.”</p>
    </div>
  )
}

export default TestimonyCard