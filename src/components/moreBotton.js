import React from "react";
import style from "../css/moreButton.module.css";

const MoreBotton = (props) => {
  return <button className={style.button}>{props.text}</button>;
};

export default MoreBotton;