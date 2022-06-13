import React from "react";

function Card(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.img} alt="wallpaper" />
      <p>{props.year}</p>
    </div>
  );
}

export default Card;
