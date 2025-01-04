import React from "react";
import "./TourPage.css"; // Mantén la importación del estilo

const VolcanoBoarding = () => {
  // Lista de imágenes para la galería
  const galleryImages = [
    "/images/volcano/volcano-boarding1.jpg",
    "/images/volcano/volcano-boarding2.jpg",
    "/images/volcano/volcano-boarding3.jpg",
    "/images/volcano/volcano-boarding4.jpg",
  ];

  return (
    <div className="tour-container">
      <h1>Volcano Boarding - Cerro Negro Volcano</h1>
      <div className="tour-content">
        {/* Columna para el video */}
        <div className="video-column">
          <h3>Video Overview</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/eISsaaeHN1E" 
            title="Volcano Boarding Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Columna para la descripción del tour */}
        <div className="description-column">
          <h3>Volcano Boarding Tour</h3>
          <p>
            Experience the thrill of Volcano Boarding—the #1 tour in León! Take the adventure of a lifetime down the slopes of Cerro Negro, one of the youngest and most active volcanoes in Central America. Feel the adrenaline as you race down the black volcanic sand on a specially designed board!
          </p>

          <div className="tour-info">
            <p>
              <strong>⏰ Start Time:</strong> 8:00 am or 2:00 PM (pickup from your hotel)
            </p>
            <p>
              <strong>⏳ Duration:</strong> Approximately 5 hours
            </p>
            <p>
              <strong>Price:</strong>
            </p>
            <ul>
              <li>2 people: $65 per person</li>
              <li>4 people or more: $45 pp</li>
            </ul>
            <p>
              <strong>Includes:</strong> Private transportation, entrance fees, bilingual certified tourist guide, all safety equipment, complimentary fruits and water, digital photos package.
            </p>
          </div>

          <h3>Gallery</h3>
          <div className="gallery-container">
            <div className="gallery">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}${image}`}
                  alt={`Gallery Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolcanoBoarding;
