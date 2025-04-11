import React from 'react';
import { Icon } from '@iconify/react';
import './body.css';

const Body = () => {
  const mythicalSites = [
    {
      id: 1,
      icon: 'mdi:road-variant',
      title: 'Reserva Natural Isla Juan Venado',
      description: 'Una isla de origen cuaternario, formada por depósitos marinos y continentales de arena y arcilla. El estero tiene múltiples ramificaciones por donde se puede navegar lentamente y disfrutar del paisaje de manglar',
    },
    {
      id: 2,
      icon: 'mdi:castle',
      title: 'Hervideros de San Jacinto',
      description: 'Un campo fumarólico donde se pueden observar pozas de lodo hirviente y emisiones de vapor, reflejando la intensa actividad geotérmica de la zona',
    },
    {
      id: 3,
      icon: 'mdi:volcano',
      title: 'Reserva Natural Complejo Volcánico Telica-Rota',
      description: "Este complejo volcánico ofrece oportunidades para el senderismo y la observación de la actividad volcánica, permitiendo a los visitantes experimentar de cerca la dinámica geológica de la región",
    }
  ];

  return (
    <div className="mythical-container">
      <h2>Reservas Naturales</h2>
      
      <div className="sites-grid">
        {mythicalSites.map(site => (
          <div key={site.id} className="site-card">
            <div className="site-icon">
              <Icon icon={site.icon} />
            </div>
            <h3>{site.title}</h3>
            <p>{site.description}</p>
            <div className="card-actions">
              <button className="explore-btn">Ver en el mapa</button>
              <button className="stories-btn">Aprender mas</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;