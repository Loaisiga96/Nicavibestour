import React from 'react';
import './TourPage.css';

const SanJacintoMudPools = () => {
  return (
    <div className="tour-container">
      <h1>San Jacinto Mud Pools</h1>
      <p>Disfruta de una caminata por los famosos pozos de barro de San Jacinto, una maravilla natural de Nicaragua.</p>
      <h3>Gallery</h3>
      <div className="gallery">
        <img src="/images/san-jacinto1.jpg" alt="Gallery Image 1" />
        <img src="/images/san-jacinto2.jpg" alt="Gallery Image 2" />
        <img src="/images/san-jacinto3.jpg" alt="Gallery Image 3" />
        <img src="/images/san-jacinto4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default SanJacintoMudPools;
