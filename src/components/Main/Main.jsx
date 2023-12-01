import React from "react";
import "./Main.css";
import FoodCard from "../Food-card/FoodCard";
import TestimonyCard from "../Testimony-card/TestimonyCard";
import HomeData from "../../data/homedata.json";
import { Fade } from "react-awesome-reveal";

function Main() {
  return (
    <main>
      <section className="week-special">
        <Fade direction="up">
          <div className="top-section">
            <h2>This Week's Specials</h2>
            <button className="active-btn">Online Menu</button>
          </div>
        </Fade>

        <div className="card-container">
          {HomeData.specialMenu.map((menu) => (
            <FoodCard key={menu.id} menu={menu} />
          ))}
        </div>
      </section>
      <section className="testimonials">
        <Fade direction="up">
          <h2>Testimonials</h2>
        </Fade>
        <div className="card-container">
          {HomeData.customerTestimony.map((customer) => (
            <TestimonyCard key={customer.id} customer={customer} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
