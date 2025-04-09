import React from 'react';
import { Icon } from '@iconify/react';
import './locales.css';

const Locales = () => {
  const businesses = [
    {
      id: 1,
      name: 'El Bodegón',
      description: 'Restaurante tradicional nicaragüense con música en vivo.',
      icon: 'mdi:silverware-fork-knife',
    },
    {
      id: 2,
      name: 'Café Don Pepe',
      description: 'Cafetería artesanal con granos locales.',
      icon: 'mdi:coffee',
    },
    {
      id: 3,
      name: 'Mercado Central',
      description: 'Mercado vibrante con artesanías y productos locales.',
      icon: 'mdi:store',
    },
  ];

  return (
    <div className="businesses-container">
      <h2>Negocios locales</h2>
      <div className="business-list">
        {businesses.map((business) => (
          <div key={business.id} className="business-item">
            <div className="business-icon">
              <Icon icon={business.icon} />
            </div>
            <div className="business-info">
              <h3>{business.name}</h3>
              <p>{business.description}</p>
            </div>
            <div className="business-actions">
              <button className="action-button">
                <Icon icon="mdi:star-outline" />
              </button>
              <button className="action-button">
                <Icon icon="mdi:map-marker" />
              </button>
              <button className="select-button">
                Seleccionar <Icon icon="mdi:chevron-down" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locales;