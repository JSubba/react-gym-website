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
      <Link to="#" className="logo">
        <img src={Logo} alt="logo image" />
      </Link>
      <input type="checkbox" id="menu-btn" className="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="#">HEADER</Link>
        </li>
        <li>
          <Link to="#">ABOUT</Link>
        </li>
        <li>
          <Link to="#">FEATURES</Link>
        </li>
        <li>
          <Link to="#">OFFER</Link>
        </li>
        <li>
          <Link to="#">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
