import React, { useEffect, useState } from "react";
import "../css/facts.css";

const Facts = (props) => {
  const [factData, setFactData] = useState([]);

  useEffect(() => {
    for (const key in props.factData) {
      setFactData((prev) => [
        ...prev,
        <div className="item" key={key}>
          {props.factData[key].text}
        </div>,
      ]);
    }
  }, [props.factData]);

  return (
    <section className="facts" id="facts">
      <h2 className="section-title" id="facts-title">
        Interesting Facts <span className="period">.</span>
      </h2>
      <div
        className="scrolling-wrapper-flexbox"
        onWheel={(e) => {
          const wrapper = document.querySelector(".scrolling-wrapper-flexbox ");
          wrapper.scrollLeft += e.deltaY;
        }}
        onMouseEnter={() => {
          console.log("MOUSE ENTER");
          document.querySelector("body").classList.toggle("stop-scrolling");
        }}
        onMouseLeave={() => {
          console.log("MOUSE Leave");
          document.querySelector("body").classList.toggle("stop-scrolling");
        }}
      >
        {factData}
      </div>
      <p className="scroll-animation">{`SCROLL  >`}</p>
    </section>
  );
};

export default Facts;
