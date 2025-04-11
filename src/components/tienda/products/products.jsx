import React from 'react';
import { Icon } from '@iconify/react';
import './products.css';

const Products = () => {
  const categories = ['Todos los productos', 'Artesanias', 'Ropa', 'Comida y bebidas', 'Arte'];
  
  const featuredProducts = [
    {
      id: 1,
      name: 'Hamaca tradicional',
      image: 'https://i.ibb.co/vFBjn2r/hamaca.jpg',
      price: 890,
      description: 'Hamaca de algodón tejida a mano en colores vibrantes, elaborada por artesanos locales.',
    },
    {
      id: 2,
      name: 'Modelo Catedral de Leon',
      image: 'https://i.ibb.co/sdxwvnp9/modelo.jpg',
      price: 350,
      description: 'Réplica en miniatura de la catedral, Patrimonio de la Humanidad por la UNESCO.',
    },
    {
      id: 3,
      name: 'Cafe Volcanica',
      price: 156,
      image: 'https://i.ibb.co/4RSRcbkc/cafe.jpg',
      description: 'Café premium cultivado en suelos volcánicos cerca de León.',
    },
    {
      id: 4,
      name: 'Blusa bordada',
      price: 340,
      image: 'https://i.ibb.co/LsjD4Xf/blusa.jpg',
      description: "Blusa tradicional de mujer con patrones de bordados coloridos.",
    },
    {
      id: 5,
      name: 'Adornos artesanales',
      price: 100,
      image: 'https://i.ibb.co/wN0wmb8r/art.jpg',
      description: "Preciosos adornos hechos por artesanos de Leon.",
    },
    {
      id: 6,
      name: 'Enchiladitas',
      price: 20,
      image: 'https://i.ibb.co/7tMRHJwY/comida.jpg',
      description: "Deliciosas enchiladitas, tipicas de la ciudad de Leon.",
    },
    {
      id: 7,
      name: 'Libro Nicaragua TravelGuide 2023',
      price: 400,
      image: 'https://i.ibb.co/JjqkPhG2/libro.jpg',
      description: "Libros de viajes y guias de la ciudad de Leon.",
    },
    {
      id: 8,
      name: 'Bandera de Leon',
      price: 250,
      image: 'https://i.ibb.co/svrM7vmV/bander.jpg',
      description: "Bandera de tamaño mediano del departamento de Leon",
    },
  ];

  return (
    <div className="products-container">
      <div className="categories-nav">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`category-btn ${index === 0 ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="search-section">
        <h3>Buscar productos</h3>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Busca por nombre, categoria, o descripcion"
          />
          <button className="search-btn">
            <Icon icon="mdi:magnify" />
          </button>
        </div>
      </div>

      <section className="featured-products">
        <h2>Productos</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="favorite-icon">
                <Icon icon="mdi:star-outline" />
              </div>
              <div className="product-info">
                <span className="price">C${product.price.toFixed(2)}</span>
                <img className='imagen' src={product.image}/>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-actions">
                  <button className="add-to-cart">Agregar producto</button>
                  <button className="view-details">Ver detalles</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className='view-more'>Ver mas...</a>
      </section>
    </div>
  );
};

export default Products;