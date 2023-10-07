import React from "react";
import "../css/castItem.css";

const CastItem = (props) => {
  return (
    <div className={props.class}>
      <img
        src={props.profile}
        className={`actor-img ${props.isEven ? "__even" : "__odd"}`}
        alt="Actor"
      ></img>

      <p className={props.isEven ? "char-name__even" : "char-name__odd"}>
        {props.char}
      </p>
      <p className={props.isEven ? "actor-name__even" : "actor-name__odd"}>
        {props.actor}
      </p>
    </div>
  );
};

export default CastItem;
