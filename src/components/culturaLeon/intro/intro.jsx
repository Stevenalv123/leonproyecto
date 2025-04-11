import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className="culture-intro">
      <div className="intro-image">
        <img 
          src="https://i.ibb.co/39p23TcS/pusisima.webp" 
          alt="Celebración cultural en León" 
        />
      </div>
      <div className="intro-content">
        <h1>Discover León's Rich Cultural Heritage</h1>
        <p>
          Immerse yourself in the vibrant traditions, folklore, and artistic expressions that define León's unique cultural identity.
        </p>
      </div>
    </div>
  );
};

export default Intro;