import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-brand">Tierra Leonesa</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <Icon icon="mdi:home" />
            Inicio
          </Link>
          <Link to="/explore" className="nav-link">
            <Icon icon="mdi:compass" />
            Explorar
          </Link>
          <Link to="/tienda" className="nav-link">
            <Icon icon="mdi:store" />
            Tienda
          </Link>
          <Link to="/culture" className="nav-link">
            <Icon icon="mdi:bank" />
            Cultura
          </Link>
          <Link to="/mythical" className="nav-link">
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