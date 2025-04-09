import React from 'react';
import { Icon } from '@iconify/react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='div'>
        <nav className="navbar">
            <div className="navbar-container">
                <a to="/" className="navbar-logo">
                Leon Explorer
                </a>
                <ul className="nav-menu">
                <li className="nav-item">
                    <a to="/" className="nav-link">
                    <Icon icon="mdi-light:home" className="nav-icon" />
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a to="/about" className="nav-link">
                    <Icon icon="mdi:explore" className="nav-icon" />
                    Explorer
                    </a>
                </li>
                <li className="nav-item">
                    <a to="/services" className="nav-link">
                    <Icon icon="mdi:business" className="nav-icon" />
                    Businesses
                    </a>
                </li>
                <li className="nav-item">
                    <a to="/contact" className="nav-link">
                    <Icon icon="mdi:head-heart-outline" className="nav-icon" />
                    Culture
                    </a>
                </li>
                <li className="nav-item">
                    <a to="/contact" className="nav-link">
                    <Icon icon="mdi-light:bank" className="nav-icon" />
                    Mythical places
                    </a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;