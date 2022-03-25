import React from "react";
import { Link } from "react-scroll";
import "./Offer.scss";

const Offer = () => {
  return (
    <div id="offer">
      <div className="offer-heading">
        <h1>
          A BIG <span>OFFER</span>FOR THIS SUMMER
        </h1>
        <p className="details">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="offer-btns">
          <Link to="main" className="offer-btn" smooth={true} duration={1000}>
            JOIN NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
