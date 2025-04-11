import React from 'react';
import { Icon } from '@iconify/react';
import './historicos.css';

const Historicos = () => {
  const legends = [
    {
      id: 1,
      icon: 'mdi:ghost',
      name: 'Ruinas de León Viejo',
      description: "Fueron declaradas Patrimonio de la Humanidad en el año 2000. Además de representar el origen colonial de Nicaragua, las Ruinas de León Viejo tienen un enorme valor arqueológico, ya que son uno de los pocos sitios urbanos del siglo XVI en América Latina que no ha sido reconstruido ni modificado.",
    },
    {
      id: 2,
      icon: 'mdi:dog',
      name: 'Iglesia de San Juan Bautista de Sutiava',
      description: 'Construida entre 1698 y 1710, esta iglesia es reconocida por su fachada barroca y su relevancia histórica en la comunidad indígena de Sutiava.',
    },
    {
      id: 3,
      icon: 'mdi:cart',
      name: 'Santuario Diocesano de Nuestra Señora de La Merced',
      description: 'Esta iglesia, de estilo barroco colonial tardía con influencias neoclásicas, es un importante centro de devoción mariana y un ejemplo destacado de la arquitectura religiosa de León.',
    }
  ];

  return (
    <div className="folklore-container">
      <h2>Lugares historicos</h2>
      
      <div className="folklore-content">
        <div className="folklore-images">
          <img 
            src="https://i.ibb.co/qLP8Q28G/Ruinas-leon-viejo36.jpg" 
            alt="Folklore representation" 
            className="folklore-img"
          />
          <img 
            src="https://i.ibb.co/gLq1RjG0/iglesia-san-juan-bautista.jpg" 
            alt="Mystical landscape" 
            className="folklore-img"
          />
          <img 
            src="https://i.ibb.co/PGscQYmb/frontispicio-de-iglesia-la-merced-en-leon-nicaragua-visit-leon-nicaragua.jpg" 
            alt="Mystical landscape" 
            className="folklore-img"
          />
          <img 
            src="https://i.ibb.co/vxsp5GFw/historia.jpg" 
            alt="Mystical landscape" 
            className="folklore-img"
          />
        </div>

        <div className="legends-list">
          {legends.map(legend => (
            <div key={legend.id} className="legend-item">
              <Icon icon={legend.icon} className="legend-icon" />
              <div className="legend-text">
                <h3>{legend.name}</h3>
                <p>{legend.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Historicos;