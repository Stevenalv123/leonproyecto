import React from 'react';
import { Icon } from '@iconify/react';
import './fiestas.css';

const Fiestas = () => {
  const festivals = [
    {
      name: 'Fiestas Patronales',
      date: '1-10 Agosto',
      location: 'Ciudad de Leon',
      activities: 'Desfiles, Danzas, Ceremonias religiosas'
    },
    {
      name: 'La Gritería',
      date: '7-8 Diciembre',
      location: 'Todo Leon',
      activities: 'Exhibiciones de altares, canticos, regalos'
    },
    {
      name: 'Semana Santa',
      date: 'Marzo/Abril',
      location: 'Catedral y Calles',
      activities: 'Procesiones, desfiles, ceremonias'
    },
    {
      name: 'Festival de Poesía',
      date: 'Febrero',
      location: 'Varios lugares',
      activities: 'Lecturas de poemas, eventos culturales'
    }
  ];

  return (
    <div className="festivals-container">
      <h2>Fechas mas importantes</h2>
      
      <div className="festivals-table">
        <div className="table-header">
          <div className="header-cell">
            <Icon icon="mdi:festival" />
            Festival
          </div>
          <div className="header-cell">Fecha</div>
          <div className="header-cell">Ubicacion</div>
          <div className="header-cell">Actividades principales</div>
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