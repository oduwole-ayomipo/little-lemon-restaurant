import "../styles/Reservations.css";
import "../styles/Menu.css";
import React from "react";
import BasicForm from "./BasicForm";
import ReservationsForm from "./ReservationsForm";
import { Route, Routes } from "react-router-dom";

function Reservations() {
  return (
    <div>
      <div>
        <div className="footer-lls menu-banner"></div>
        <div className="footer-lls-overlay">Little Lemon Bookings</div>
      </div>
      <div className="reservation-form">
        <div className="reservation-top">
          <div>
            <h2>Begin your reservation</h2>
          </div>
          <div>
            <p></p>
            <img />
            <div>
              <p>See existing reservations</p>
            </div>
            <div>
              <button>Call for Info</button>
              <button>Get Direction</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>Special Offers</h4>
            <p>
              Reserve a table at the little lemon restaurant for a maximum of 4
              guest and get a 75% discount on all dishes (drinks and cocktails
              are not included).
            </p>
            <p>
              Offers valid till:
              <span>23:45:01</span>
            </p>
          </div>
          <div>
            <hr />
            <p>4-10 tables available now</p>
          </div>
        </div>
        <div>
          <button>Reserve a table</button>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
