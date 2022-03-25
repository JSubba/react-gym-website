import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-scroll";
import "./Navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    window.scrollY > 50 ? setNav(true) : setNav(false);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={Logo} alt="logo image" />
      </Link>
      <input type="checkbox" id="menu-btn" className="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1000}>
            HEADER
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={1000}>
            FEATURES
          </Link>
        </li>
        <li>
          <Link to="offer" smooth={true} duration={1000}>
            OFFER
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
