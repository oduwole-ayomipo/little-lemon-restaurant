import "./App.css";
import React from "react";
import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer/Footer";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <>
      <Nav />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
