import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<Home />} />
        <Route path="/Menu" element = {<Home />} />
        <Route path="/Reservations" element = {<Home />} />
        <Route path="/order-online" element = {<Home />} />
        <Route path="/login" element = {<Home />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
