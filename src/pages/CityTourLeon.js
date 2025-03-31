import React from 'react';
import './TourPage.css';

const CityTourLeon = () => {
  return (
    <div className="tour-container">
      <h1>City Tour Leon</h1>
      <p>Descubre la historia y cultura de León, una de las ciudades más antiguas y ricas en patrimonio de Nicaragua.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/leon1.jpg" alt="Gallery Image 1" />
        <img src="/images/leon2.jpg" alt="Gallery Image 2" />
        <img src="/images/leon3.jpg" alt="Gallery Image 3" />
        <img src="/images/leon4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default CityTourLeon;
