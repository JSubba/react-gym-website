import React from "react";
import "./Review.scss";
import Person1 from "../assets/images/person1.png";
import Person2 from "../assets/images/person2.png";
import Person3 from "../assets/images/person3.png";
import { ImStarFull, ImStarHalf } from "react-icons/im";

const Review = () => {
  return (
    <div id="reviews">
      <h1>REVIEWS</h1>
      <div className="container">
        <div className="row">
          <div>
            <img src={Person1} alt="person image" />
            <h3>John Matt</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, ipsum eos? Perspiciatis expedita laudantium blanditiis
              cupiditate at natus, quam alias?
            </p>
            <h3 className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
            </h3>
          </div>
          <div>
            <img src={Person2} alt="person image" />
            <h3>Sandra Doe</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, ipsum eos? Perspiciatis expedita laudantium blanditiis
              cupiditate at natus, quam alias?
            </p>
            <h3 className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </h3>
          </div>
          <div>
            <img src={Person3} alt="person image" />
            <h3>Don Sign</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, ipsum eos? Perspiciatis expedita laudantium blanditiis
              cupiditate at natus, quam alias?
            </p>
            <h3 className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
