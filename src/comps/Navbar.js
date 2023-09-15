import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const [scroll, setScroll] = useState(false);

  const sfunc = () => {
    if (window.scrollY > 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", sfunc);

  return (
    <div className={scroll ? "big" : "small"}>
      <ul className={click ? "header" : "header active"}>
        <li>
          <a href="">car</a>
        </li>
        <li>
          {" "}
          <a href="">door</a>
        </li>
        <li>
          {" "}
          <a href="">dog</a>
        </li>
      </ul>
      <div className="r">
        <div className="bull" onClick={handleClick}>
          {click ? (
            <div>
              <FaBars />
            </div>
          ) : (
            <div>
              <FaTimes />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
