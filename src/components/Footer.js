import React from "react";
import "./Footer.scss";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#navbar" className="footer-logo">
            <img src={Logo} alt="logo" />
          </a>
          <h2>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="footer-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="footer-icon" />
            </a>
          </h2>
        </div>

        <div className="footer-link-box">
          <ul className="footer-list">
            <li>
              <h3 className="h5 footer-item-title">Company</h3>
            </li>
            <li>
              <Link
                to="about"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="features"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="main"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Join
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <h3 className="h5 footer-item-title">Products</h3>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="offer"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Offer
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <h3 className="h5 footer-item-title">Resources</h3>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                FAQ’S
              </Link>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Terms&Cond.
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">
        &copy; Copyrights 2022 SHONAN GYM || All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
