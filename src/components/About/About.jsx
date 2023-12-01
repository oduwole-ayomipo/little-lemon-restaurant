import "../../components/Header/Header.css";
import chef from "../../images/chef2.jpg";
import littlelemon from "../../images/restaurant2.jpg";
import React from "react";

function About() {
  return (
    <div className="about-section">
      <div className="about-title">
        <h1>Little Lemon</h1>
        <h5>Chicago</h5>
      </div>

      <div className="about-content">
        <div className="about-information">
          <h3>
            At Little Lemon, we invite you to embark on a culinary journey that
            transcends time, where the essence of the Mediterranean comes to
            life in every bite. Join us for a celebration of tradition, and the
            joy of sharing delicious meals with the ones you love.
          </h3>
          <div className="about-img-container">
            <img src={chef} alt="Chef" className="about-right-img1" />
            <img
              src={littlelemon}
              alt="Little Lemon"
              className="about-right-img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
