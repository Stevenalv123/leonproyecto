import React from 'react';
import { Icon } from '@iconify/react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="nav-brand">Tierra Leonesa</a>
        <div className="nav-links">
          <a href="/home" className="nav-link">
            <Icon icon="mdi:home" />
            Inicio
          </a>
          <a href="/explore" className="nav-link">
            <Icon icon="mdi:compass" />
            Explorar
          </a>
          <a href="/businesses" className="nav-link">
            <Icon icon="mdi:store" />
            Negocios
          </a>
          <a href="/culture" className="nav-link">
            <Icon icon="mdi:bank" />
            Cultura
          </a>
          <a href="/mythical" className="nav-link">
            <Icon icon="mdi:star" />
            Lugares Miticos
          </a>
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