import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/images/logo.png'; 
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaWhatsapp, FaYoutube } from 'react-icons/fa'; 
import { Collapse } from 'react-bootstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleHamburgerClick = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="NicaVibes Tours" className="logo" />
        </Link>
      </div>

      <button className="navbar-toggler" type="button" onClick={handleHamburgerClick} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span> Menu
      </button>

      <Collapse in={isOpen}>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown" onClick={toggleDropdown}>
              <span className="dropdown-link">
                DESTINATIONS <span className="dropdown-arrow">▼</span>
              </span>
              <Collapse in={isDropdownOpen}>
                <ul className="dropdown-menu">
                  <li><Link to="/volcano-boarding">Volcano Boarding</Link></li>
                  <li><Link to="/city-tour-leon">City Tour Leon</Link></li>
                  <li><Link to="/cooking-class">Cooking Class</Link></li>
                  <li><Link to="/el-hoyo-volcano">El Hoyo Volcano</Link></li>
                  <li><Link to="/flor-de-cana">Flor de Caña</Link></li>
                  <li><Link to="/horseback-riding">Horseback Riding</Link></li>
                  <li><Link to="/juan-venado-island">Juan Venado Island</Link></li>
                  <li><Link to="/san-jacinto-mud-pools">San Jacinto Mud Pools</Link></li>
                  <li><Link to="/somoto-canyon-tour">Somoto Canyon Tour</Link></li>
                  <li><Link to="/telica-sunset-tour">Telica Sunset Tour</Link></li>
                </ul>
              </Collapse>
            </li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/other-services">Other Services</Link></li>
          </ul>
        </div>
      </Collapse>

      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61564990773701&locale=es_LA" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com/nicavibestours?utm_source=qr&igsh=MTR0aWFsdGFoN2JmdQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.tiktok.com/@nicavibes.tours?_t=8sLwUXBxgwP&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={24} />
        </a>
        <a href="mailto:nicavibestours@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.youtube.com/@NicaVibesTours" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
      </div>

      <div className="contact-button-container">
        <a href="https://wa.me/50586818703?text=Hello,%20I'm%20interested%20in%20NicaVibes%20Tours!" className="contact-button">
          <FaWhatsapp size={20} /> CONTACT NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
