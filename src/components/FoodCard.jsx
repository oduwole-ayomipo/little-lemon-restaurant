import React from 'react'
import '../styles/FoodCard.css'
import '../App.css'
import GreekSalad from '../images/greek-salad.svg'

function FoodCard() {
  return (
    <div className='card'>
        <img src={GreekSalad} alt="" className='card-image' />
        <div className='card-description'>
            <div>
                <div className='card-top-description'>
                    <h4>Greek Salad</h4>
                    <p>$13.99</p>
                </div>
                <p>The famous Greek salad of crispy lettuce, green pepper, olives and our Chicago finest bell pepper and tomato.</p>
            </div>
            <div className='card-footer'>
                <p> Order a Delivery</p>
            </div>
        </div>
    </div>
  )
}

export default FoodCard