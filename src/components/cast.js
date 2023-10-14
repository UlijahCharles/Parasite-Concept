import React, { useState } from "react";
import CastItem from "./castItem";
import "../css/cast.css";
import ExtraButton from "./extraButton";

const Cast = (props) => {
  const [castRevealed, setCastRevealed] = useState(false);
  const finalData = [];

  for (const item in props.castData) {
    finalData.push(
      <CastItem
        key={item}
        class={
          props.castData[item].id > 5
            ? "cast-grid__item close display-none"
            : "cast-grid__item"
        }
        isEven={props.castData[item].id % 2}
        char={props.castData[item].characterName}
        actor={props.castData[item].actorName}
        profile={props.castData[item].imageUrl}
      />
    );
  }

  function toggleFullCast() {
    if (!castRevealed) {
      const castDom = document.querySelectorAll(".close");

      for (let i = 0; i < castDom.length; i++) {
        castDom[i].classList.toggle("display-none");
        setTimeout(() => {
          castDom[i].classList.replace("close", "open");
        }, 0);
      }
      setCastRevealed(true);
    } else {
      const castDom = document.querySelectorAll(".cast-grid__item");
      for (let i = castDom.length - 1; i > 5; i--) {
        castDom[i].classList.replace("open", "close");
        setTimeout(() => {
          castDom[i].classList.toggle("display-none");
        }, 1000);
      }

      setCastRevealed(false);
    }
  }

  return (
    <section className="cast" id="cast">
      <h2 className="section-title">
        Cast<span className="period">.</span>
      </h2>
      <section className="cast-grid">{finalData}</section>
      <ExtraButton
        text={"FULL CAST "}
        onClick={toggleFullCast}
        icon={""}
        class={"reveal-button"}
      />
    </section>
  );
};

export default Cast;
