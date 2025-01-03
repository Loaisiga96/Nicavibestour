import React from 'react';
import './TourPage.css';

const HorsebackRiding = () => {
  return (
    <div className="tour-container">
      <h1>Horseback Riding - Asososca Crater Lake</h1>
      <p>Explora el hermoso lago de cráter de Asososca a caballo, una experiencia única en la naturaleza.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/horseback1.jpg" alt="Gallery Image 1" />
        <img src="/images/horseback2.jpg" alt="Gallery Image 2" />
        <img src="/images/horseback3.jpg" alt="Gallery Image 3" />
        <img src="/images/horseback4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default HorsebackRiding;
