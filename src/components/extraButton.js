import React from "react";
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
    </button>
  );
};

export default ExtraButton;
