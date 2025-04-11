import React from "react";
import Intro from "./intro/intro";
import Body from "./body/body";
import Historia from "./historia/historia";
import Fiestas from "./fiestas/fiestas";
import './culturaleon.css';

const CultureLeon = () => {
  return (
    <div className="culture-leon-container">
      <Intro/>
      <div className="culture-content">
        <Body/>
        <Historia/>
        <Fiestas/>
      </div>
    </div>
  );
};

export default CultureLeon;