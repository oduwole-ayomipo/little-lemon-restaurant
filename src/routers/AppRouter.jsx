import React from "react";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import BasicForm from "../components/Basic-form/BasicForm";
import AboutPage from "../pages/About/AboutPage";
import Reservations from "../pages/Reservations/Reservations";
import Error404 from "../pages/Error404/Error404";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<Error404 />} />
        <Route path="/login" element={<Error404 />} />
        <Route path="/reservations/forms" element={<BasicForm />} />
      </Routes>
    </>
  );
}

export default AppRouter;
