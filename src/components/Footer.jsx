import React from "react";
import { NavLink, Link } from "react-router-dom";
import chef from "../images/chef.jpg";
import "../styles/Footer.css";

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
            <li>
              <NavLink
                to="/"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservations"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-online"
                activeclassname="active"
                onClick={handleNavLinkClick}
              >
                Order Online
              </NavLink>
            </li>
            <li>
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
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/about">LinkedIn</Link>
            </li>
            <li>
              <Link to="/menu">Twitter</Link>
            </li>
            <li>
              <Link to="/reservations">Facebook</Link>
            </li>
            <li>
              <Link to="/order-online">Telegram</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column ">
          <div className="footer-heading">Contact</div>
          <ul>
            <li>
              <Link to="/">Address</Link>
            </li>
            <li>
              <Link to="/about">Telephone</Link>
            </li>
            <li>
              <Link to="/menu">Email</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
