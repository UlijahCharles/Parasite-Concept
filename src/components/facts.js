import React from "react";
import "../css/facts.css";

const Facts = (props) => {
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
      >
        <div className="item">
          Vivamus et ullamcorper risus. Ut venenatis sapien ante, commodo congue
          ligula dapibus dapibus. Vivamus rutrum dui libero. Integer vitae magna
          tempor, consectetur arcu ac, condimentum sem. Proin et sem maximus,
          fringilla tortor nec, cursus metus. Praesent eget dapibus urna. Morbi
          eu bibendum velit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Integer libero risus,
          maximus eget nibh nec, gravida pulvinar augue. Nulla eget nulla
          eleifend, laoreet lacus nec, elementum ex. Suspendisse potenti. Duis
          suscipit, enim eu euismod tincidunt, elit lacus blandit nisl, eget
          tincidunt eros dolor non dui.
        </div>
        <div className="item">
          Vivamus et ullamcorper risus. Ut venenatis sapien ante, commodo congue
          ligula dapibus dapibus. Vivamus rutrum dui libero. Integer vitae magna
          tempor, consectetur arcu ac, condimentum sem. Proin et sem maximus,
          fringilla tortor nec, cursus metus. Praesent eget dapibus urna. Morbi
          eu bibendum velit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Integer libero risus,
          maximus eget nibh nec, gravida pulvinar augue. Nulla eget nulla
          eleifend, laoreet lacus nec, elementum ex. Suspendisse potenti. Duis
          suscipit, enim eu euismod tincidunt, elit lacus blandit nisl, eget
          tincidunt eros dolor non dui.
        </div>
        <div className="item">
          Vivamus et ullamcorper risus. Ut venenatis sapien ante, commodo congue
          ligula dapibus dapibus. Vivamus rutrum dui libero. Integer vitae magna
          tempor, consectetur arcu ac, condimentum sem. Proin et sem maximus,
          fringilla tortor nec, cursus metus. Praesent eget dapibus urna. Morbi
          eu bibendum velit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Integer libero risus,
          maximus eget nibh nec, gravida pulvinar augue. Nulla eget nulla
          eleifend, laoreet lacus nec, elementum ex. Suspendisse potenti. Duis
          suscipit, enim eu euismod tincidunt, elit lacus blandit nisl, eget
          tincidunt eros dolor non dui.
        </div>
      </div>
      <p className="scroll-animation">{`SCROLL  >`}</p>
    </section>
  );
};

export default Facts;
