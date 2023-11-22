import React from 'react'
import '../App.css'
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import About from './About';

function Home() {
  return (
    <>
        <Header />
        <Main />
        <About />
        <Footer />
    </>
  )
}

export default Home