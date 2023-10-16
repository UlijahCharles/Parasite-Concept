import React from "react";
import { HashLink } from "react-router-hash-link";
import PosterImage from "../assets/parasite_header.jpg";
import TitleImage from "../assets/parasite-title.png";
import "../css/nav.css";

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul className={props.isMainNav ? "nav-list" : "nav-footer-list"}>
        <li className="nav-list_item">
          <HashLink smooth className={"nav-list_item_link"} to={"#storyline"}>
            Storyline
          </HashLink>
        </li>
        <li className="nav-list_item">
          <HashLink smooth className={"nav-list_item_link"} to={"#trailer"}>
            Trailer
          </HashLink>
        </li>
        <li className="nav-list_item">
          <HashLink smooth className={"nav-list_item_link"} to={"#cast"}>
            Cast
          </HashLink>
        </li>
        <li
          className={`nav-list_item__poster ${
            props.showPoster ? "" : "no-poster"
          }`}
        >
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
          <HashLink smooth className={"nav-list_item_link"} to={"#director"}>
            Director
          </HashLink>
        </li>
        <li className="nav-list_item">
          <HashLink smooth className={"nav-list_item_link"} to={"#facts"}>
            Interesting facts
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
