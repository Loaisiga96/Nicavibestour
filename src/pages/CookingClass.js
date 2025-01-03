import React from 'react';
import './TourPage.css';

const CookingClass = () => {
  return (
    <div className="tour-container">
      <h1>Cooking Class</h1>
      <p>Únete a nuestra clase de cocina y aprende a preparar los deliciosos platillos nicaragüenses.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/cooking1.jpg" alt="Gallery Image 1" />
        <img src="/images/cooking2.jpg" alt="Gallery Image 2" />
        <img src="/images/cooking3.jpg" alt="Gallery Image 3" />
        <img src="/images/cooking4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default CookingClass;
