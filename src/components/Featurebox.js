import React from "react";

const Featurebox = ({ image, title }) => {
  return (
    <div className="box">
      <div>
        <img src={image} alt="feature image" />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Featurebox;
