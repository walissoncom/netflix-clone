import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const logo = require("../../images/netflix-logo.png");
  const avatar = require("../../images/avatar.png");

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix logo" />
      <img className="nav__avatar" src={avatar} alt="User avatar" />
    </div>
  );
}

export default Nav;
