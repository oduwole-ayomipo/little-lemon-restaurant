import React from 'react'
import "../styles/Footer.css"
import "../styles/Nav.css"
import "../styles/Main.css"
import '../components/FoodCard'
import '../App.css'
import FoodCard from './FoodCard'


import TestimonyCard from './TestimonyCard'
import GreekSalad from '../images/greek-salad.svg'
import Bruschette from '../images/bruschette.svg'
import Lemondessert from '../images/lemon-dessert.svg'

function Menu() {
  return (
    <>
    <div>
        <div className='footer-lls'></div>
        <div className='footer-lls-overlay'>Little Lemon Menu</div>
    </div>
    <nav>
        <ul className='nav-links'>
            <li><a href="">All</a></li>
            <li><a href="">Seafoods</a></li>
            <li><a href="">Salad</a></li>
            <li><a href="">Appetizers</a></li>
            <li><a href="">Burgers</a></li>
            <li><a href="">Main Course</a></li>
        </ul>
    </nav>
    <hr />
    <main  className='week-special'>
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
    </>
  )
}

export default Menu