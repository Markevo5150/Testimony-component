import React from "react";
import "../styles/Testimony.css";
function Testimony(props) {
  return (
    <div className="main-component-container">
      <img
        className="testimony-image"
        src={require(`../img/face-${props.image}.png`)}
        alt="emma"
      />
      <div className="text-container">
        <p className="name-testimony">
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className="position-testimony">
          {props.job} en <strong>{props.brand}</strong>
        </p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}
export default Testimony;
