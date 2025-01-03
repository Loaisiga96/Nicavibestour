import React from 'react';
import './TourPage.css';

const SomotoCanyonTour = () => {
  return (
    <div className="tour-container">
      <h1>Somoto Canyon Tour</h1>
      <p>Explora el impresionante cañón de Somoto, una de las maravillas naturales de Nicaragua.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/somoto-canyon1.jpg" alt="Gallery Image 1" />
        <img src="/images/somoto-canyon2.jpg" alt="Gallery Image 2" />
        <img src="/images/somoto-canyon3.jpg" alt="Gallery Image 3" />
        <img src="/images/somoto-canyon4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default SomotoCanyonTour;
