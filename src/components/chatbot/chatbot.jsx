import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessages = [...messages, { text: inputMessage, sender: 'user' }];
    setMessages(newMessages);
    setInputMessage('');

    const botResponse = {
      text: getBotResponse(inputMessage),
      sender: 'bot'
    };

    setTimeout(() => {
      setMessages([...newMessages, botResponse]);
    }, 1000);
};

const getBotResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hola') || lowerMessage.includes('hi') || lowerMessage.includes('buenas')) {
    return '¡Hola! Soy el asistente virtual de León. ¿En qué puedo ayudarte?';
  }
  
  if (lowerMessage.includes('catedral')) {
    return 'La Catedral de León es una obra maestra del arte barroco y neoclásico, construida entre 1747 y 1814. Fue declarada Patrimonio de la Humanidad por la UNESCO en 2011.';
  }
  
  if (lowerMessage.includes('restaurante') || lowerMessage.includes('comer')) {
    return 'Hay varios restaurantes populares en León. Te recomiendo El Bodegón para comida tradicional nicaragüense, o Café Don Pepe para café y bocadillos locales.';
  }
  
  if (lowerMessage.includes('hotel') || lowerMessage.includes('alojamiento')) {
    return 'León tiene una variedad de opciones de alojamiento, desde hostales económicos hasta hoteles boutique en el centro histórico.';
  }
  
  if (lowerMessage.includes('gracias')) {
    return '¡De nada! Estoy aquí para ayudarte. ¿Hay algo más que quieras saber sobre León?';
  }

  return 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla? Puedo ayudarte con información sobre la catedral, restaurantes, hoteles y lugares turísticos de León.';
};

  return (
    <div className="chatbot-wrapper">
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <Icon icon="line-md:chat" />
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            <h3>Asistente virtual de Leon</h3>
            <button onClick={() => setIsOpen(false)}>
              <Icon icon="line-md:chat-round-twotone" />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>
              <Icon icon="mdi:send" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;