import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './historia.css';

const Historia = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const images = [
    {
      id: 1,
      src: 'https://i.ibb.co/vxsp5GFw/historia.jpg',
      alt: 'Historia de León'
    },
    {
      id: 2,
      src: 'https://i.ibb.co/cSN5sXr2/historia2.jpg',
      alt: 'Traditional male costume'
    },
    {
      id: 3,
      src: 'https://i.ibb.co/vCfSCKyD/historia3.jpg',
      alt: 'Traditional costume details'
    }
  ];

  return (
    <div className="historia-container">
      <h2>Historia de Leon</h2>
      
      <div className="costume-gallery">
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="costume-description">
        <div className={`text-content ${isExpanded ? 'expanded' : ''}`}>
          <p>
            El Departamento de León, situado al occidente de Nicaragua, destaca por su profunda riqueza histórica y cultural. Fundada en 1524 por el conquistador Francisco Hernández de Córdoba cerca del volcán Momotombo, su primera ubicación "hoy llamada León Viejo" fue abandonada tras desastres naturales en 1610, dando lugar al actual asentamiento cercano a Sutiaba.
          </p>
          <div className="expanded-content">
            <p>
              León fue capital del país hasta 1824 y aún conserva su esencia colonial. Su imponente catedral, considerada la más grande de Centroamérica, refleja el legado barroco de la ciudad y alberga los restos del poeta Rubén Darío, figura clave en la literatura hispanoamericana. Además, la ciudad mantiene espacios culturales como el Museo Rubén Darío y el Centro de Arte Ortiz Gurdián, que fortalecen su identidad como núcleo artístico e intelectual del país. 
            </p>
            <p>
              Fue la primera capital de Nicaragua y desempeñó un papel central durante la época colonial y los primeros años de independencia. Su ubicación estratégica y su desarrollo económico la convirtieron en un punto neurálgico para la administración colonial. Tras la independencia, León continuó siendo un centro de poder, albergando instituciones clave como la Universidad de León, establecida en 1812, que contribuyó al florecimiento cultural y educativo de la región.
            </p>
            <p>
              La rivalidad histórica entre León y Granada, reflejada en sus preferencias políticas y sociales, llevó a que la capitalidad se alternara entre ambas ciudades. Finalmente, en 1852, Managua fue designada como la capital permanente de Nicaragua, buscando un punto intermedio que equilibrara las influencias de León y Granada. A pesar de este cambio, León mantuvo su relevancia cultural y política, siendo reconocida como la "Ciudad Universitaria" por su continuo impulso al pensamiento crítico y la educación superior.
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

export default Historia;