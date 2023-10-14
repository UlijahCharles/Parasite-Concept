import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "../css/trailer.css";

const Trailer = (props) => {
  const [onReady, setOnReady] = useState();

  useEffect(() => {
    // Variables

    var card = document.querySelector(".card"),
      play = document.querySelector(".card-play"),
      video = document.querySelector(".card-video");

    // Shine effect
    card.onmousemove = function (e) {
      const x = e.pageX - card.offsetLeft;
      const y = e.pageY - card.offsetTop;

      card.style.setProperty("--x", x + "px");
      card.style.setProperty("--y", y + "px");
    };

    const onPlayerReady = (event) => {
      play.addEventListener("click", function () {
        card.classList.add("video-is-open");
        video.style.display = "block";
      });
    };

    setOnReady(() => onPlayerReady);
  }, []);

  return (
    <section className="trailer" id="trailer">
      <h2 className="section-title">
        Trailer<span className="period">.</span>
      </h2>
      <div className="card">
        <div className="card-play"></div>
        <YouTube
          videoId="JE9z-gy4De4"
          className="card-video"
          onReady={onReady}
        />
      </div>
    </section>
  );
};

export default Trailer;
