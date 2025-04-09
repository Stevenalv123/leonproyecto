import React from 'react';
import { Icon } from '@iconify/react';
import './chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <h2>Pregunta a Nuestra Guía Virtual</h2>
      <div className="guide-card">
        <div className="guide-icon">
          <Icon icon="mdi:chat" />
        </div>
        <div className="guide-content">
          <h3>León Asistente Virtual</h3>
          <p>
          ¿Tienes preguntas sobre León? Nuestro asistente de IA puede ayudarte a encontrar lugares, conocer la cultura local o planificar tu visita.
          </p>
          <button className="start-chat">
            Comenzar Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;