import './intro.css';
import React from 'react';

const Intro = () => {
  return (
    <div className="store-container">
      <div className="store-header">
        <div className="banner-container">
          <img src="https://i.ibb.co/rR0g9Jyc/entas.jpg" alt="Banner Tienda" />
        </div>
        <div className="header-content">
          <h1>Bienvenido a nuestra Tienda en linea</h1>
          <p>Aquí encontrarás productos únicos de Tierra Leonesa. Explora nuestras categorías y descubre lo mejor.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
