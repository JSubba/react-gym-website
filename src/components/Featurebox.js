import React from "react";

const Featurebox = ({ image, title }) => {
  return (
    <div className="a-box">
      <di>
        <img src={image} alt="feature image" />
      </di>
      <div className="a-b-text">
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Featurebox;
