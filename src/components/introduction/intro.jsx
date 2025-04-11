import React, { useState, useEffect } from 'react';
import './intro.css';

const Intro = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://i.ibb.co/FLtXNqDT/Catedral-de-Leon-Nicaragua-wedding6.jpg",
      alt: "León Cathedral Interior"
    },
    {
      url: "https://i.ibb.co/3yNPZPF9/imagen1.jpg",
      alt: "León Cathedral Exterior"
    },
    {
      url: "https://i.ibb.co/mrKkfqNW/imagen3.jpg",
      alt: "Plaza Central de León"
    },
    {
      url: "https://i.ibb.co/PsNvws26/imagen5.webp",
      alt: "Museo de Arte Ortiz Gurdián"
    },
    {
      url: "https://i.ibb.co/HZpxdJC/imagen4.jpg",
      alt: "Iglesia de Sutiaba"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => 
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-image">
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={index === currentImage ? 'active' : ''}
            />
          ))}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="intro-content">
        <h1>Descubre León, Nicaragua</h1>
        <p>
          Explora la rica cultura, lugares historicos, y tesoros escondidos de la segunda ciudad mas grande de Nicaragua
        </p>
      </div>
    </div>
  );
};

export default Intro;