import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; // Asegúrate de que la ruta sea correcta
import './Footer.css'; // Importa el archivo de estilos del footer

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <img src={logo} alt="NicaVibes Tours Logo" className="footer-logo" />
        <p>&copy; {new Date().getFullYear()} NicaVibes Tours. Relax - Live - Travel.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61564990773701&locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/nicavibestours?utm_source=qr&igsh=MTR0aWFsdGFoN2JmdQ==" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.tiktok.com/@nicavibes.tours?_t=8sLwUXBxgwP&_r=1" target="_blank" rel="noopener noreferrer" aria-label="Visit our TikTok">
            <FaTiktok size={30} />
          </a>
          <a href="mailto:nicavibestours@gmail.com" rel="noopener noreferrer" aria-label="Send us an email">
            <FaEnvelope size={30} />
          </a>
          <a href="https://www.youtube.com/@NicaVibesTours" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube">
            <FaYoutube size={30} />
          </a>
          <a href="https://wa.me/50586818703?text=Hello,%20I'm%20interested%20in%20NicaVibes%20Tours!" target="_blank" rel="noopener noreferrer" className="contact-button" aria-label="Contact us on WhatsApp">
            <FaWhatsapp size={30} />
            BOOK NOW!
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
