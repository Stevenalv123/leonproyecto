import React from 'react';
import { Icon } from '@iconify/react';
import './location.css';

const Location = () => {
  const locations = [
    {
      id: 1,
      name: 'Catedral de Leon',
      description: 'Patrimonio de la Humanidad por la UNESCO y la catedral más grande de Centroamérica.',
      icon: 'mdi:church',
    },
    {
      id: 2,
      name: 'Cerro Negro',
      description: 'Volcán activo donde los visitantes pueden experimentar el sand boarding.',
      icon: 'mdi:mountain',
    },
    {
      id: 3,
      name: 'Museo de Arte',
      description: 'Museo que exhibe arte contemporáneo nicaragüense e internacional.',
      icon: 'mdi:museum',
    }
  ];

  return (
    <div className="locations-container">
      <h2>Lugares destacados</h2>
      <div className="locations-grid">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <Icon icon={location.icon} className="location-icon" />
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <div className="card-buttons">
              <button className="view-details">Ver detalles</button>
              <button className="find-map">Ubicar en el mapa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;