import React from 'react';
import { Icon } from '@iconify/react';
import './body.css';

const Body = () => {
  const categories = ['Overview', 'Traditions', 'Folklore', 'Dances', 'Costumes', 'Festivals'];
  
  const traditions = [
    {
      id: 1,
      icon: 'mdi:human-female',
      title: 'La Gigantona',
      description: 'A towering female figure accompanied by a dwarf called "El Enano Cabezón" that represents the Spanish colonial era and indigenous resistance.',
    },
    {
      id: 2,
      icon: 'mdi:church',
      title: 'La Purísima',
      description: 'A religious celebration honoring the Immaculate Conception with processions, altars, and the traditional "Gritería" on December 7th.',
    },
    {
      id: 3,
      icon: 'mdi:cross',
      title: 'Semana Santa',
      description: 'Holy Week celebrations featuring elaborate processions, religious ceremonies, and the creation of colorful sawdust carpets.',
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
        <h2>Cultural Traditions</h2>
        <div className="traditions-grid">
          {traditions.map(tradition => (
            <div key={tradition.id} className="tradition-card">
              <div className="tradition-icon">
                <Icon icon={tradition.icon} />
              </div>
              <h3>{tradition.title}</h3>
              <p>{tradition.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;