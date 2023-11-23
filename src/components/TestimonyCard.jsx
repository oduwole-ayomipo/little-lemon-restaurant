import React from 'react'
import '../styles/FoodCard.css'
import '../App.css'

function TestimonyCard(
  {
    ClientName,
    ClientImg,
    Ratings,
    ClientComment
  }
) {
  return (
    <div className='testimony-card'>
       <h4>{ClientName}</h4>
        <div className='card-description testimony'>
            <img src={ClientImg} width={75} alt="" className='card-image testimony-image' />
            <img src={Ratings} width={90} alt="" />
        </div>
        <p>{ClientComment}</p>
    </div>
  )
}

export default TestimonyCard