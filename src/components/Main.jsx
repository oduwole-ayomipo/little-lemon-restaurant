import '../styles/Main.css'
import FoodCard from './FoodCard'
import GreekSalad from '../images/greek-salad.svg'
import Bruschette from '../images/bruschette.svg'
import Lemondessert from '../images/lemon-dessert.svg'
import React from 'react'

function Main() {
  return (
    <main>
      <div className='top-section'>
        <h2>This Week's Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className='card-container'>
        
        <FoodCard 
          FoodName = "Greek Salad"
          FoodPrice = "$76.78"
          FoodDescription = "The famous Greek salad of crispy lettuce, green pepper, olives, soy sauce and our Chicago finest bell pepper and tomato."
          FoodImg = {GreekSalad}
        />

        <FoodCard 
          FoodName = "Bruschette"
          FoodPrice = "$63.45"
          FoodDescription = "Our Bruschette is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          FoodImg = {Bruschette}
        />

        <FoodCard 
          FoodName = "Lemon Dessert"
          FoodPrice = "$23.00"
          FoodDescription = "A luscious blend of zesty lemon-infused sponge cake, soaked in refreshing lemon syrup, and crowned with silky lemon."
          FoodImg = {Lemondessert}
        />

      </div>
    </main>
  )
}

export default Main