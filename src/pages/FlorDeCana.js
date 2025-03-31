import React from 'react';
import './TourPage.css';

const FlorDeCana = () => {
  return (
    <div className="tour-container">
      <h1>Flor de Caña</h1>
      <p>Descubre la historia detrás de la famosa marca de ron nicaragüense, Flor de Caña, con una visita a la destilería.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/flor-de-cana1.jpg" alt="Gallery Image 1" />
        <img src="/images/flor-de-cana2.jpg" alt="Gallery Image 2" />
        <img src="/images/flor-de-cana3.jpg" alt="Gallery Image 3" />
        <img src="/images/flor-de-cana4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default FlorDeCana;
