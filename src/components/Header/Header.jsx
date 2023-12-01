import "./Header.css";
import LLS from "../../images/restaurant.jpg";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-title">
        <h1>Little Lemon</h1>
        <h5>Chicago</h5>
      </div>

      <div className="header-content">
        <div className="header-information">
          <h3>
            Little lemon is a family owned Mediterranean restaurant. We focus on
            the traditional and native recipes served with a modern twist.
          </h3>
          <div className="header-btn">
            <Link to="/reservations">
              <button className="active-btn">Reserve a Table</button>
            </Link>
          </div>
        </div>
        <img src={LLS} alt="Little Lemon" className="header-right-img" />
      </div>
    </header>
  );
}

export default Header;
