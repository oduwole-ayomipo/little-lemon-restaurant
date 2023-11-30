import React from "react";
import "../../components/Footer//Footer.css";
import "../../components/Navigation/Nav.css";
import "../../components/Main/Main.css";
import "../../components/Food-card/FoodCard";
import "../../App.css";
import "./Menu.css";
import FoodCard from "../../components/Food-card/FoodCard";
import allMenuData from "../../data/allmenu.json";

function Menu() {
  return (
    <>
      <div>
        <div className="footer-lls menu-banner"></div>
        <div className="footer-lls-overlay">Little Lemon Menu</div>
      </div>
      <nav className="menu-nav">
        <ul className="nav-links">
          <h4>OUR DISHES</h4>
        </ul>
      </nav>
      <hr />
      <main className="main-menu">
        <div className="menu-card-container">
          {allMenuData.allmenu.map((menu) => (
            <FoodCard key={menu.id} menu={menu} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Menu;
