import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [displayNav, setDisplayNav] = useState(false);

  const changeBackground = () => {
    window.scrollY > 50 ? setNav(true) : setNav(false);
  };
  window.addEventListener("scroll", changeBackground);

  const handleDisplay = () => {
    setDisplayNav(!displayNav);
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={Logo} alt="logo image" />
      </Link>
      <label className="menu-icon">
        <span className="nav-icon" onClick={handleDisplay}>
          {displayNav ? <FaTimes /> : <FaBars />}
        </span>
      </label>
      <ul className={displayNav ? "menu menu-active" : "menu"}>
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
          <Link to="reviews" smooth={true} duration={1000}>
            REVIEWS
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
