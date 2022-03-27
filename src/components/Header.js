import React from "react";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = () => {
  return (
    <div id="main">
      <div className="header-heading">
        <div className="name">
          <h2>START YOUR</h2>
          <h1>
            <span>FITNESS</span>WITH US.
          </h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="header-btns">
            <Link
              to="contact"
              className="header-btn"
              smooth={true}
              duration={1000}
            >
              JOIN US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
