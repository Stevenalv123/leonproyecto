import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

const Map = () => {
  const [activeTab, setActiveTab] = useState('interactive');

  const tabs = [
    { id: 'interactive', label: 'Mapa interactivo' },
    { id: 'popular', label: 'Lugares populares' },
    { id: 'business', label: 'Negocios locales' },
  ];

  const center = [12.4350, -86.8781]; 

  return (
    <div className="map-container">
      <div className="map-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="map-content">
        <h2>{activeTab === 'interactive' ? 'Mapa interactivo' : tabs.find(tab => tab.id === activeTab)?.label}</h2>
        <div className="map-frame">
          <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
              <Popup>
                Estás en León 🦁
              </Popup>
            </Marker>
          </MapContainer>

            <div className='place-history'>
                <h3>Catedral de León, Nicaragua</h3>
                <p>
                    La Catedral de León, oficialmente llamada Basílica Catedral de la Asunción de León, 
                    es una de las catedrales más antiguas y grandes de América Central. Construida entre 
                    1747 y 1814, fue declarada Patrimonio de la Humanidad por la UNESCO en 2011.
                </p>
                <p>
                    Su arquitectura combina estilos barroco y neoclásico, con gruesos muros diseñados 
                    para resistir terremotos y erupciones volcánicas. La catedral se destaca por sus 
                    bóvedas, sus cúpulas y sus magníficos techos de madera. En su interior, alberga 
                    la tumba del poeta Rubén Darío, considerado el padre del modernismo literario en 
                    español.
                </p>
                <p>
                    La catedral ha sobrevivido a numerosos eventos históricos, incluyendo batallas, 
                    terremotos y revoluciones, convirtiéndose en un símbolo de resistencia y fe para 
                    el pueblo nicaragüense. Su azotea, pintada de blanco, ofrece vistas panorámicas 
                    de la ciudad y de los volcanes circundantes.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
