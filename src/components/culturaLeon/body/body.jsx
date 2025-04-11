import React from 'react';
import { Icon } from '@iconify/react';
import './body.css';

const Body = () => {
  const categories = ['Festividades', 'Folklore', 'Danzas', 'Costumbres'];
  
  const traditions = [
    {
      id: 1,
      icon: 'mdi:human-female',
      title: 'La Gigantona',
      description: 'Una imponente figura femenina acompañada de un enano llamado "El Enano Cabezón" que representa la época colonial española y la resistencia indígena.',
    },
    {
      id: 2,
      icon: 'mdi:church',
      title: 'La Purísima',
      description: 'Celebración religiosa en honor a la Inmaculada Concepción con procesiones, altares y la tradicional "Gritería" el 7 de diciembre.',
    },
    {
      id: 3,
      icon: 'mdi:cross',
      title: 'Gritería Chiquita',
      description: 'Celebración católica que se lleva a cabo cada 14 de agosto en León, Nicaragua. Es una fiesta popular que honra a la Virgen de la Asunción. ',
    },
  ];

  return (
    <div className="culture-container">
      <nav className="culture-nav">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`nav-item ${index === 0 ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </nav>

      <section className="traditions-section">
        <h2>Festividades</h2>
        <div className="traditions-grid">
          {traditions.map(tradition => (
            <div key={tradition.id} className="tradition-card">
              <div className="tradition-icon">
                <Icon icon={tradition.icon} />
              </div>
              <h3>{tradition.title}</h3>
              <p>{tradition.description}</p>
              <button className="learn-more">Aprender mas</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;