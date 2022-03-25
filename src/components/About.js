import React from "react";
import { Link } from "react-scroll";
import "./About.scss";
import aboutImage from "../assets/images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="about image" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          explicabo ipsum a modi dolorum ipsam, similique ratione earum,
          asperiores provident placeat consectetur totam quis quo.
        </p>
        <button>
          <Link to="main" smooth={true} duration={1000}>
            READ MORE
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
