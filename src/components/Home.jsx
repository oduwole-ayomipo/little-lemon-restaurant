import React from 'react'
import '../App.css'
import Nav from './Nav'
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

function Home() {
  return (
    <>
        <Nav />
        <Header />
        <Main />
        <Footer />
    </>
  )
}

export default Home