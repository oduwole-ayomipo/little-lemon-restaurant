import React from 'react'
import '../styles/FoodCard.css'
import '../App.css'

function FoodCard(
    {FoodName,
    FoodPrice,
    FoodDescription,
    FoodImg}
) {
  return (
    <div className='card'>
        <img src={FoodImg} alt="" className='card-image' />
        <div className='card-description'>
            <div>
                <div className='card-top-description'>
                    <h4>{FoodName}</h4>
                    <p>{FoodPrice}</p>
                </div>
                <p>{FoodDescription}</p>
            </div>
            <div className='card-footer'>
                <p> Order a Delivery</p>
            </div>
        </div>
    </div>
  )
}

export default FoodCard