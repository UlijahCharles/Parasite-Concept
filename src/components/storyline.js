import React from "react";
import "../css/storyline.css";
import img1 from "../assets/family_pizza.jpeg";
import img2 from "../assets/sibling_bathroom.jpg";
import img3 from "../assets/Park_Seo_Joon.jpeg";
import img4 from "../assets/rock.jpg";
import img5 from "../assets/choi_woo.jpg";
import img6 from "../assets/mansion_set.jpg";
import ExtraButton from "./extraButton";

const Storyline = () => {
  return (
    <section className="storyline-section" id="storyline">
      <div className="storyline-header">
        <h2 className="storyline-header__title">
          Storyline<span className="period">.</span>
        </h2>
        <h3 className="storyline-header__subtitle">THRILLER DRAMA COMEDY</h3>
      </div>
      <div className="storyline-grid">
        <div className="storyline-grid__description-container">
          <p className="storyline-grid__description-container__text">
            Kim Ki-Taek used to work as a driver,but lost his job a long time
            ago. He lives with his wife, Chun Suk and two senior-age children in
            a basement apartment.
          </p>
        </div>
        <div className="storyline-grid__screenshot-container">
          <img
            className="storyline-grid__screenshot-container__img"
            src={img1}
            alt="Movie Screencap 1"
          ></img>
          <img
            className="storyline-grid__screenshot-container__img"
            src={img2}
            alt="Movie Screencap 2"
          ></img>
        </div>
        <div className="storyline-grid__description-container">
          <p className="storyline-grid__description-container__text">
            One day, Ki Taek's sons Ki Woo is visted by his friend Min Hyuk, who
            works as an english tutor for a girl from a rich family. Min Hyuk
            goes to study abroad and offers Ki-Woo to take his place and gives
            Ki-Woo the scholar's stone, which is supposed to bring the family
            wealth.
          </p>
        </div>
        <div className="storyline-grid__screenshot-container">
          <img
            className="storyline-grid__screenshot-container__img"
            src={img3}
            alt="Movie Screencap 3"
          ></img>
          <img
            className="storyline-grid__screenshot-container__img"
            src={img4}
            alt="Movie Screencap 4"
          ></img>
        </div>
        <div className="storyline-grid__description-container">
          <p className="storyline-grid__description-container__text">
            Ki-Woo is interviewed at the Park family's luxury mansion. He makes
            a good impression on Mrs.Park and gets a job.
          </p>
        </div>
        <div className="storyline-grid__screenshot-container">
          <img
            className="storyline-grid__screenshot-container__img"
            src={img5}
            alt="Movie Screencap 3"
          ></img>
          <img
            className="storyline-grid__screenshot-container__img"
            src={img6}
            alt="Movie Screencap 4"
          ></img>
        </div>
      </div>
      <ExtraButton text="READ FULL STORYLINE" />
    </section>
  );
};

export default Storyline;
