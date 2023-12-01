import React from "react";
import { NavLink } from "react-router-dom";
import chef from "../../images/chef.jpg";
import "./Footer.css";

function Footer() {
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div>
        <div className="footer-lls"></div>
        <div className="footer-lls-overlay">Bon Appétit!</div>
      </div>

      <div className="footer-content">
        <img src={chef} alt="Little Lemon Chef" className="footer-chef-img" />
        <div className="footer-column">
          <div className="footer-heading">
            DoorMat <br /> Navigation
          </div>
          <ul>
            <li className="footer-links">
              <NavLink
                to="/"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="footer-links">
              <NavLink
                to="/about"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className="footer-links">
              <NavLink
                to="/menu"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Menu
              </NavLink>
            </li>
            <li className="footer-links">
              <NavLink
                to="/reservations"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Reservations
              </NavLink>
            </li>
            <li className="footer-links">
              <NavLink
                to="/order-online"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Order Online
              </NavLink>
            </li>
            <li className="footer-links">
              <NavLink
                to="/login"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-column ">
          <div className="footer-heading">Social Media</div>
          <ul>
            <li className="footer-links">Instagram </li>
            <li className="footer-links">LinkedIn</li>
            <li className="footer-links">Twitter </li>
            <li className="footer-links">Facebook</li>
            <li className="footer-links">Telegram</li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="footer-heading">Contact</div>
          <ul>
            <li className="footer-links">
              Plot 1-6 New Railing, <br />
              Chicago. New york city.
            </li>
            <li className="footer-links">01 - 234-567</li>
            <li className="footer-links">infO@littlelemon.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
