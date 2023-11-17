import '../styles/Main.css'
import FoodCard from './FoodCard'
import React from 'react'

function Main() {
  return (
    <main>
      <div className='top-section'>
        <h2>This Week's Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className='card-container'>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </main>
  )
}

export default Main