import React from 'react';
import './TourPage.css';

const JuanVenadoIsland = () => {
  return (
    <div className="tour-container">
      <h1>Juan Venado Island Tour</h1>
      <p>Realiza un tour por la isla Juan Venado, un santuario natural lleno de flora y fauna exótica.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/juan-venado1.jpg" alt="Gallery Image 1" />
        <img src="/images/juan-venado2.jpg" alt="Gallery Image 2" />
        <img src="/images/juan-venado3.jpg" alt="Gallery Image 3" />
        <img src="/images/juan-venado4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default JuanVenadoIsland;
