import React from "react";
import "../css/cast.css";

const Cast = (props) => {
  return (
    <section className="cast">
      <h2 className="cast-title">
        Cast<span className="period">.</span>
      </h2>
      <section className="cast-grid">
        <div className="cast-grid__item">1</div>
        <div className="cast-grid__item">2</div>
        <div className="cast-grid__item">3</div>
        <div className="cast-grid__item">4</div>
        <div className="cast-grid__item">5</div>
        <div className="cast-grid__item">6</div>
        <div className="cast-grid__item extra">7</div>
        <div className="cast-grid__item extra">8</div>
        <div className="cast-grid__item extra">9</div>
        <div className="cast-grid__item extra">10</div>
      </section>
    </section>
  );
};

export default Cast;
