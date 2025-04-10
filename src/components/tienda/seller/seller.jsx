import React from 'react';
import { Icon } from '@iconify/react';
import './seller.css';

const Seller = () => {
  return (
    <div className="seller-container">
      <h2>Vende con nosotros</h2>
      <div className="seller-content">
        <div className="seller-icon">
          <Icon icon="mdi:chat" />
        </div>
        <div className="seller-content">
          <h3>León Asistente Virtual</h3>
          <p>
            ¿Eres un vendedor local de Leon? Unete a nuestra plataforma y vende tus productos a clientes a nivel nacional.
          </p>
          <button className="register-btn">Registrarme como vendedor</button>
          <button className="learn-more-btn">Aprender mas</button>
        </div>
      </div>
    </div>
  );
};

export default Seller;