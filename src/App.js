import './App.css';
import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<Home />} />
        <Route path="/Menu" element = {<Home />} />
        <Route path="/Reservations" element = {<Home />} />
        <Route path="/order-online" element = {<Home />} />
        <Route path="/login" element = {<Home />} />      
      </Routes>
    </>
  );
}

export default App;
