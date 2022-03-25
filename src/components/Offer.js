import React from "react";
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
          <a href="#" className="offer-btn">
            JOIN NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
