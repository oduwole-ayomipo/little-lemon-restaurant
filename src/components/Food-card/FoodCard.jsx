import React from "react";
import "./FoodCard.css";
import "../../App.css";

function FoodCard(props) {
  return (
    <div className="card">
      <img
        src={require(`../../images/${props.menu.img}`)}
        alt="Menu Dishes"
        className="card-image"
      />
      <div className="card-description">
        <div>
          <div className="card-top-description">
            <h4>{props.menu.name}</h4>
            <p>{props.menu.price}</p>
          </div>
          <p>{props.menu.description}</p>
        </div>
        <div className="card-footer">
          <p> Order a Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
