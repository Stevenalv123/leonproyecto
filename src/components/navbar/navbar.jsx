import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="mobile-menu">
          <Link to="/" className="nav-brand">Tierra Leonesa</Link>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} />
          </button>
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            <Icon icon="mdi:home" />
            Inicio
          </Link>
          <Link to="/tienda" className="nav-link" onClick={() => setIsOpen(false)}>
            <Icon icon="mdi:store" />
            Tienda
          </Link>
          <Link to="/culture" className="nav-link" onClick={() => setIsOpen(false)}>
            <Icon icon="mdi:bank" />
            Cultura
          </Link>
          <Link to="/mythical" className="nav-link" onClick={() => setIsOpen(false)}>
            <Icon icon="mdi:star" />
            Lugares Miticos
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <a href="/login" className="nav-link">Iniciar Sesion</a>
        <a href="/signup" className="nav-link signup">Registrarse</a>
        <a href="/plan" className="nav-link plan-visit">Planea tu visita</a>
      </div>
    </nav>
  );
};

export default Navbar;