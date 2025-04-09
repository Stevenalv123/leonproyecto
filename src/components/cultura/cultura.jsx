import React from 'react';
import { Icon } from '@iconify/react';
import './cultura.css';

const Cultura = () => {
  const culturalItems = [
    {
      id: 1,
      name: 'La Gigantona',
      description: 'Danza folclórica tradicional con marionetas gigantes y tambores.',
      icon: 'mdi:music-note',
    },
    {
      id: 2,
      name: 'Semana Santa',
      description: 'Celebraciones de Semana Santa con elaboradas procesiones y tradiciones.',
      icon: 'mdi:calendar',
    },
    {
      id: 3,
      name: 'Rubén Darío',
      description: "Explora el legado del poeta y escritor más famoso de Nicaragua.",
      icon: 'mdi:book-open-page-variant',
    },
  ];

  return (
    <div className="cultural-container">
      <h2>Patrimonio cultural</h2>
      <div className="cultural-grid">
        {culturalItems.map((item) => (
          <div key={item.id} className="cultural-card">
            <div className="icon-wrapper">
              <Icon icon={item.icon} className="cultural-icon" />
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button className="learn-more">Aprender más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cultura;