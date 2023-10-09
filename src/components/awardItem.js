import React from "react";
import "../css/awardItem.css";

const AwardItem = (props) => {
  return (
    <>
      <p className="award-name">
        {props.Award} <span className="award-year">{props.Year}</span>
        <span className="award-category"> {props.Category}</span>
      </p>
    </>
  );
};

export default AwardItem;
