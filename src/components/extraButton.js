import React from "react";
import expandImg from "../assets/expand_arrow.png";
import style from "../css/moreButton.module.css";

const ExtraButton = (props) => {
  return (
    <button
      className={`${style.button} ${props.class} ${
        props.directorBoolean ? style[`director-button`] : ""
      }`}
      onClick={props.onClick}
    >
      {props.text}
      <img
        src={expandImg}
        alt="Expand Arrow"
        className={style[`down-arrow`]}
      ></img>
    </button>
  );
};

export default ExtraButton;
