import React from "react";
import "../../components/Food-card/FoodCard.css";
import "../../App.css";

function TestimonyCard(props) {
  return (
    <div className="testimony-card">
      <h4>{props.customer.name}</h4>
      <div className="card-description testimony">
        <img
          src={require(`../../images/${props.customer.img}`)}
          width={75}
          alt=""
          className="card-image testimony-image"
        />
        <img
          src={require(`../../images/${props.customer.ratings}`)}
          width={90}
          alt="Customer Rating Star"
        />
      </div>
      <p>{props.customer.comment}</p>
    </div>
  );
}

export default TestimonyCard;
