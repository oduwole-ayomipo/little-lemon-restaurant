import React from 'react'
import "../styles/Footer.css"
import "../styles/Nav.css"
import "../styles/Main.css"
import '../components/FoodCard'
import '../App.css'
import '../styles/Menu.css'
import FoodCard from './FoodCard'
import allMenuData from '../data/allmenu.json'




function Menu() {

  return (
    <>
    <div>
        <div className='footer-lls menu-banner'></div>
        <div className='footer-lls-overlay'>Little Lemon Menu</div>
    </div>
    <nav className='menu-nav'>
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
    <main  className='main-menu'>
        <div className='menu-card-container'>
            {allMenuData.allmenu.map ((menu) => (
                <FoodCard
                    key={menu.id}
                    menu = {menu}/>
            ))}
        </div>
    </main>
    </>
  )
}

export default Menu