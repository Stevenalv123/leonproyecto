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
        <h1>Descubre la riqueza cultura de Leon</h1>
        <p>
           León es uno de los departamentos más dinámicos de Nicaragua, con una economía que combina agricultura, industria, comercio y turismo. León es conocido por sus impresionantes edificios coloniales, su vibrante escena artística y sus hermosas playas de arena blanca. La región también es hogar de numerosos parques nacionales y reservas naturales. El turismo y el comercio son pilares fundamentales en el desarrollo económico de León, Nicaragua. La ciudad, con su riqueza cultural, arquitectónica y natural, se ha convertido en uno de los destinos más visitados del país. A través del turismo, se fomenta la preservación del patrimonio histórico y cultural.
        </p>
      </div>
    </div>
  );
};

export default Intro;