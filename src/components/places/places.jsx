import React from 'react';
import { Icon } from '@iconify/react';
import './places.css';

const Places = () => {
  const mythicalPlaces = [
    {
      id: 1,
      name: 'La Calle de los Duendes',
      description: 'Calle donde se dice que los enanos míticos aparecen por la noche',
    },
    {
      id: 2,
      name: 'Bosque del Cadejo',
      description: 'Zona boscosa asociada al legendario espíritu Cadejo',
    },
    {
      id: 3,
      name: 'Rio de la Llorona',
      description: 'Río donde se dice que vaga la mujer que llora',
    },
  ];

  return (
    <div className="places-container">
      <h2>Mythical Places</h2>
      <div className="places-list">
        {mythicalPlaces.map((place) => (
          <div key={place.id} className="place-item">
            <div className="place-info">
              <Icon icon="mdi:map-marker" className="location-icon" />
              <div className="place-text">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
            <Icon icon="mdi:chevron-right" className="arrow-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;