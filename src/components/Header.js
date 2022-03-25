import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div id="main">
      <div className="header-heading">
        <div className="name">
          <h2>STEP UP YOUR</h2>
          <h1>
            <span>FITNESS</span>WITH US.
          </h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="header-btns">
            <a href="#" className="header-btn">
              JOIN US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
