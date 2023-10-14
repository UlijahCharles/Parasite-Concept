import React from "react";
import "../css/footer.css";
import Nav from "./nav";

const Footer = (props) => {
  return (
    <section className="footer">
      <Nav showPoster={false} />
    </section>
  );
};

export default Footer;
