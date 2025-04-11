import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './museos.css';

const Museos = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const images = [
    {
      id: 1,
      src: 'https://i.ibb.co/ycgb5V9p/casa-archivo-museo-ruben-dario-top-10-visit-leon-nicaragua-1-orig.jpg',
      alt: 'Traditional group in front of church'
    },
    {
      id: 2,
      src: 'https://i.ibb.co/d4psh4R8/museo-de-tradiciones-y-leyendas0004.jpg',
      alt: 'Traditional male portrait'
    },
    {
      id: 3,
      src: 'https://i.ibb.co/gMvTGzTM/museo-de-la-revolucion-en-leon-nicaragua-visit-leon-nicaragua-orig.jpg',
      alt: 'Traditional costume details'
    }
  ];

  return (
    <div className="museos-container">
      <h2>Principales Museos</h2>
      
      <div className="costume-gallery">
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="museum-description">
        <div className={`text-content ${isExpanded ? 'expanded' : ''}`}>
          <p>
            León alberga una rica colección de museos que preservan su patrimonio cultural e histórico. El Museo Rubén Darío, establecido en 1943 en la casa natal del célebre poeta, resguarda su legado literario con manuscritos originales y objetos personales, siendo un testimonio vivo del modernismo literario en lengua española.
          </p>
          <div className="expanded-content">
            <p>
              La ciudad también cuenta con importantes espacios dedicados a la memoria histórica, como la Galería de Héroes y Mártires y el Museo de la Revolución, que documentan la lucha revolucionaria y sus protagonistas. El Museo de Mitos y Leyendas, ubicado en la antigua cárcel "La 21", transforma un espacio de dolor en un centro cultural que celebra el rico folclore nicaragüense.
            </p>
            <p>
              El patrimonio indígena encuentra su espacio en el Museo Arqueológico Adiact de Sutiaba, con su valiosa colección de artefactos precolombinos. Estos museos, junto con los murales históricos dispersos por la ciudad, tejen una red de espacios culturales que mantienen viva la memoria colectiva y la identidad leonesa.
            </p>
          </div>
        </div>
        <button 
          className="read-more-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              Leer menos <Icon icon="mdi:chevron-up" />
            </>
          ) : (
            <>
              Leer más <Icon icon="mdi:chevron-down" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Museos;