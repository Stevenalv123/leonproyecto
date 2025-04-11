import React from 'react';
import { Icon } from '@iconify/react';
import './fiestas.css';

const Fiestas = () => {
  const festivals = [
    {
      name: 'Fiestas Patronales',
      date: 'August 1-10',
      location: 'City Center',
      activities: 'Parades, dances, religious ceremonies'
    },
    {
      name: 'La Gritería',
      date: 'December 7-8',
      location: 'Throughout León',
      activities: 'Altar displays, singing, gift-giving'
    },
    {
      name: 'Semana Santa',
      date: 'March/April',
      location: 'Cathedral & streets',
      activities: 'Processions, carpets, ceremonies'
    },
    {
      name: 'Festival de Poesía',
      date: 'February',
      location: 'Various venues',
      activities: 'Poetry readings, cultural events'
    }
  ];

  return (
    <div className="festivals-container">
      <h2>Annual Cultural Festivals</h2>
      
      <div className="festivals-table">
        <div className="table-header">
          <div className="header-cell">
            <Icon icon="mdi:festival" />
            Festival
          </div>
          <div className="header-cell">Date</div>
          <div className="header-cell">Location</div>
          <div className="header-cell">Main Activities</div>
        </div>

        {festivals.map((festival, index) => (
          <div key={index} className="table-row">
            <div className="cell">{festival.name}</div>
            <div className="cell">{festival.date}</div>
            <div className="cell">{festival.location}</div>
            <div className="cell">{festival.activities}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fiestas;