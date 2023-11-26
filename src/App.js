import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import BasicForm from "./components/BasicForm";
import AboutPage from "./components/AboutPage";
import Reservations from "./components/Reservations";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/reservations/forms" element={<BasicForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
