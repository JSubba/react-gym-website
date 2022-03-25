import React from "react";
import Featurebox from "./Featurebox";
import "./Feature.scss";
import feature1 from "../assets/images/feature-image1.png";
import feature2 from "../assets/images/feature-image2.png";
import feature3 from "../assets/images/feature-image3.png";
import feature4 from "../assets/images/feature-image4.png";

const Feature = () => {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="feature-container">
        <Featurebox image={feature1} title="Weight Lifting" />
        <Featurebox image={feature2} title="Cardio Exercise" />
        <Featurebox image={feature3} title="Muscle Strength" />
        <Featurebox image={feature4} title="Strength Building" />
      </div>
    </div>
  );
};

export default Feature;
