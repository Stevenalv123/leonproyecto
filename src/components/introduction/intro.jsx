import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-image">
        <img src="https://i.ibb.co/FLtXNqDT/Catedral-de-Leon-Nicaragua-wedding6.jpg" alt="León Cathedral Interior" />
      </div>
      <div className="intro-content">
        <h1>Descubre León, Nicaragua</h1>
        <p>
          Explora la rica cultura, lugares historicos, y tesoros escondidos de la segunda ciudad mas grande de Nicaragua
        </p>
      </div>
    </div>
  );
};

export default Intro;