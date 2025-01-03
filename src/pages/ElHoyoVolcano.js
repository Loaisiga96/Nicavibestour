import React from 'react';
import './TourPage.css';

const ElHoyoVolcano = () => {
  return (
    <div className="tour-container">
      <h1>El Hoyo Volcano</h1>
      <p>Visita El Hoyo, un volcán espectacular con vistas increíbles de la región.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/el-hoyo1.jpg" alt="Gallery Image 1" />
        <img src="/images/el-hoyo2.jpg" alt="Gallery Image 2" />
        <img src="/images/el-hoyo3.jpg" alt="Gallery Image 3" />
        <img src="/images/el-hoyo4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default ElHoyoVolcano;
