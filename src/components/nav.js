import React from "react";
import { NavLink } from "react-router-dom";
import PosterImage from "../assets/parasite_header.jpg";
import TitleImage from "../assets/parasite-title.png";
import "../css/nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"#storyline"}>
            Storyline
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"#screencaps"}>
            Screencaps
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"#cast"}>
            Cast
          </NavLink>
        </li>
        <li className="nav-list_item__poster">
          <div className="poster-container">
            <img
              src={TitleImage}
              alt="Parasite Title"
              className="movie-title"
            ></img>
            <img src={PosterImage} alt="Poster" className="poster"></img>
            <button className="find-button">FIND THE INTRUDER </button>
          </div>
        </li>
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"#details"}>
            Details
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"#interesting"}>
            Interesting fact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
