import React from 'react';
import './TourPage.css';

const TelicaSunsetTour = () => {
  return (
    <div className="tour-container">
      <h1>Telica Sunset Tour</h1>
      <p>Admira una puesta de sol espectacular desde el volcán Telica, uno de los más activos de Nicaragua.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/telica-sunset1.jpg" alt="Gallery Image 1" />
        <img src="/images/telica-sunset2.jpg" alt="Gallery Image 2" />
        <img src="/images/telica-sunset3.jpg" alt="Gallery Image 3" />
        <img src="/images/telica-sunset4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default TelicaSunsetTour;
