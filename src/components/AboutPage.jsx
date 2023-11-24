import React from 'react'
import '../styles/AboutPage.css'
import '../App.css'
import '../styles/Footer.css'
import Olivia from '../images/olivia.jpg'
import JoinUs from '../images/join us.jpg'

function AboutPage() {
  return (
    <>
        <main>
            <div className='about-container-one' >
                <div className='container-one-left'>
                    <p>
                    About Us. <br />
                    Meet the Chef. <br />
                    Join Us.
                    </p>
                </div>
                <div className='container-one-right'>
                    <h1>About Us</h1>
                    <h5>Welcome to Little Lemon</h5>
                    <p>At Little Lemon, we believe in the power of good food and warm hospitality. Nestled in the heart of Chicago, we have been serving smiles and delicious meals since 2012. Our journey began with a simple yet passionate idea: to create a space where people can savor the joy of delectable cuisine in a cozy and inviting atmosphere.</p>
                </div>
            </div>
            <div className='about-container-two'>
                <div className='footer-lls menu-banner'></div>
            </div>
            <div className='about-container-three'>
                <p>Chef Olivia Zest is the creative force behind our culinary delights. With over two decades of experience in the culinary world, Chef Olivia has honed her skills in top kitchens around the world, blending traditional techniques with innovative twists. </p>
                <img src={Olivia} alt="" />
            </div>
            <div className='about-container-four'>
                <img src= {JoinUs} alt="" />
                <p>Join Us at Little Lemon!
                We invite you to join us at Little Lemon Restaurant and become part of our culinary story. From the kitchen to the dining table, every aspect of our restaurant is infused with a passion for excellence and a commitment to creating unforgettable moments for our guests.</p>
            </div>
        </main>
    </>
  )
}

export default AboutPage