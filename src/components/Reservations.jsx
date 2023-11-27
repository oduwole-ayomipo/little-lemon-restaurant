import "../styles/Reservations.css";
import "../styles/Menu.css";
import { Link } from "react-router-dom";
import { React } from "react";

function Reservations() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div>
        <div className="footer-lls menu-banner"></div>
        <div className="footer-lls-overlay">Little Lemon Bookings</div>
      </div>
      <div className="reservation-info">
        <div className="reservation-top">
          <div>
            <h4>Little Lemon Welcomes You! 🍋</h4>
          </div>
          <p>
            View existing <span>reservations</span>
          </p>
        </div>
        <div className="reservation-center">
          <div className="reservation-center-A">
            <p>
              Reserve a table at the Little Lemon Restaurant for a maximum of 4
              guests and enjoy an incredible 75% discount on all dishes! From
              our appetizers to mouthwatering main courses. Please note that
              this exclusive offer applies to all dishes,{" "}
              <span>with the exception of drinks and cocktails. </span> <br />
            </p>

            <div>
              <p>
                It's the perfect opportunity to gather your friends and family
                for an unforgettable dining experience without breaking the
                bank.
              </p>
            </div>
          </div>
          <div className="reservations-footer">
            <hr />
            <p>4-10 tables available now</p>
          </div>
        </div>
        <div className="reservations-btn">
          <p>Contact Us</p>

          <Link to="/reservations/forms">
            <button className="active-btn" onClick={handleLinkClick}>
              Reserve a Table
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
