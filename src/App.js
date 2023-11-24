import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import AboutPage from './components/AboutPage.jsx'
import Reservations from './components/Reservations.jsx'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<AboutPage />} />
        <Route path="/menu" element = {<Menu />} />
        <Route path="/reservations" element = {<Reservations />} />
        <Route path="/order-online" element = {<Home />} />
        <Route path="/login" element = {<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
