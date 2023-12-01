import React from "react";
import "./Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <div className="main-container">
        <div className="intro">
          <h5>Error 404!</h5>
          <p>Ooops! The page you are looking for seems to be broken</p>
          <hr />
          <p>Not to fret, this way leeds to home</p>
        </div>
        <div className="button">
          <Link to="/">
            <button className="active-btn"> Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error404;
