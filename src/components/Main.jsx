import '../styles/Main.css'
import FoodCard from './FoodCard'

import TestimonyCard from './TestimonyCard'
import GreekSalad from '../images/greek-salad.svg'
import Bruschette from '../images/bruschette.svg'
import Lemondessert from '../images/lemon-dessert.svg'

import clientOne from '../images/img-one.jpg'
import clientTwo from '../images/img-two.jpg'
import clientThree from '../images/img-three.jpg'
import clientFour from '../images/img-four.jpg'

import rating1 from '../images/starratings-one.svg'
import rating2 from '../images/starratings-two.svg'
import rating3 from '../images/starratings-three.svg'
import rating4 from '../images/starratings-four.svg'

import React from 'react'

function Main() {
  return (
    <main>
      <section className='week-special'>
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
      </section>
      <section className='testimonials'>
        <h2>Testimonials</h2>

        <div className='card-container'>
          <TestimonyCard
            ClientName="Chike Igwe"
            ClientImg = {clientOne}
            Ratings = {rating1}
            ClientComment="The blend of traditional Mediterranean recipes creates a unique and unforgettable dining experience."
          />
          <TestimonyCard 
            ClientName="Max Red"
            ClientImg = {clientTwo}
            Ratings = {rating2}
            ClientComment="Discovering Little Lemon is like uncovering a hidden culinary gem. The dining experience is truly one-of-a-kind."
          />
          <TestimonyCard 
             ClientName="Olive Rod"
             ClientImg = {clientThree}
             Ratings = {rating3}
             ClientComment="The blend of classic recipes creates a dining experience that keeps me coming back for more."
          />
          <TestimonyCard 
            ClientName="Edward Buffet"
            ClientImg = {clientFour}
            Ratings = {rating4}
            ClientComment = "As a regular at Little Lemon, I can't get enough of their authentic dishes. Especially, the Lemon Dessert Specials. I love it!"
          />

        </div>
      </section>
    </main>
  )
}

export default Main