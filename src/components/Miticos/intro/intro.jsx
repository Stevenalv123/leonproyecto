import React from 'react';
import './intro.css';

const IntroMiticos = () => {
  return (
    <div className="miticos-intro">
      <div className="intro-image">
        <img 
          src="https://i.ibb.co/JjpbsmgN/volcan.jpg" 
          alt="León's Mythical Mountains" 
        />
      </div>
      <div className="intro-content">
        <h1>Descubre los lugares mas emblematicos de Leon</h1>
        <p>
        Diversos espacios. Explore los misteriosos lugares que han forjado las leyendas y el folclore de León durante siglos. Estos sitios se alzan como testigos silenciosos del rico patrimonio cultural de la ciudad y su vibrante tradición narrativa.
        </p>
      </div>
    </div>
  );
};

export default IntroMiticos;