import React from "react";
import "../../node_modules/video-react/dist/video-react.css";
import "../css/trailer.css";

const Trailer = (props) => {
  // Variables
  var player,
    card = document.querySelector(".card"),
    play = document.querySelector(".card-play"),
    video = document.querySelector(".card-video");

  // Shine effect
  card.onmousemove = function (e) {
    const x = e.pageX - card.offsetLeft;
    const y = e.pageY - card.offsetTop;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  };

  // Youtube API
  function onYouTubePlayerAPIReady() {
    player = new YT.Player("video", {
      events: {
        onReady: onPlayerReady,
      },
    });
  }

  // Player Ready
  function onPlayerReady(event) {
    play.addEventListener("click", function () {
      card.classList.add("video-is-open");
      setTimeout(function () {
        video.style.display = "block";
        player.playVideo();
      }, 500);
    });
  }

  // Inject YouTube API script
  var tag = document.createElement("script");
  tag.src = "//www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  return (
    <section className="trailer">
      <h2 className="trailer-title">
        Trailer<span className="period">.</span>
      </h2>
      <iframe
        title="trailer"
        src="https://www.youtube.com/embed/JE9z-gy4De4?enablejsapi=1&html5=1&iv_load_policy=3&rel=0&showinfo=0"
        frameBorder="0"
        allowFullScreen
        className="card card-play card-video"
      />
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SEUXfv87Wpk?si=P123el96CEXhSYRR&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
    </section>
  );
};

export default Trailer;
