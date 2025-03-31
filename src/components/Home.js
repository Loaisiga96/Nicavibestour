// home.js
import React from 'react';
import './Home.css';
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección de bienvenida */}
      <section className="welcome-section">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          aria-label="Fondo de video de NicaVibes Tours"
          // Asegurando que el video se ajuste de manera responsiva
          style={{ objectFit: 'cover', width: '100%', height: '100vh' }}
        >
          <source src={`${process.env.PUBLIC_URL}/video/video-background.mp4`} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="content">
          <h1>Welcome to NicaVibes Tours</h1>
          <p>
            Embark on an epic adventure with NicaVibes Tours, your premier choice for exploring Nicaragua’s stunning landscapes, unique volcanoes, and rich culture.
            As a 100% Nicaraguan tour operator with over 15 years of experience, we offer exceptional, international-quality services with a vibrant local twist.
          </p>
          <p>
            Whether you’re a solo traveler, a group of friends, or a wholesaler, we’re here to make your journey unforgettable. Join us and let us guide you through the best of Nicaragua—where every moment becomes a cherished memory and you start vibing with the pulse of this incredible land.
          </p>
        </div>
      </section>

      {/* Sección Who We Are */}
      <section className="who-we-are-section">
        <div className="who-we-are-title">
          <span>Who</span>
          <span>We</span>
          <span>Are</span>
        </div>
        <div className="who-we-are-text">
          <p>
            NicaVibes Tours is a 100% Nicaraguan-owned tour operator with over 15 years of experience. We specialize in providing personalized, thrilling, and unique experiences for travelers looking to explore the natural beauty and rich culture of Nicaragua. From volcano adventures to cultural tours, we are dedicated to making your trip unforgettable.
          </p>
        </div>
      </section>

      {/* Sección: Design Your Dream Holiday */}
      <section className="design-holiday-section">
        <h2>Start Planning Your Dream Trip Now:</h2>
        <button
          className="contact-button"
          onClick={() => window.open('https://wa.me/50586818703?text=Hello,%20I\'m%20interested%20in%20NicaVibes%20Tours!', '_blank')}
          aria-label="Contact NicaVibes Tours Team via WhatsApp"
        >
          GET IN TOUCH NOW
        </button>
      </section>

      {/* Sección: Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-content">
          <div className="testimonial-video-container">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/AwIth9RRixk?si=RovSFNYbZEYYADss"
              title="Client Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="testimonial-text">
            <p>
              Hear What Our Clients Are Saying: Real Stories of Excitement and Adventure with NicaVibes Tours!
            </p>
          </div>
        </div>
      </section>

      {/* Sección Our Passion for Travel */}
      <section className="passion-for-travel-section">
        <h2 className="passion-title">Our Passion for Travel</h2>
        <p>
          At NicaVibes Tours, we don’t just offer tours—we offer experiences that stay with you forever. Our passion is to help you discover the heart and soul of Nicaragua, from the towering volcanoes to the sparkling beaches, from the jungles to the vibrant cities. Every journey is a chance to create memories, build connections, and explore new horizons.
        </p>
        <div className="image-slider">
          {Array.from({ length: 28 }, (_, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/images/passion${index + 1}.jpg`}
              alt={`Passion ${index + 1}`}
              className="passion-image"
            />
          ))}
        </div>
      </section>

      {/* Sección Our Stellar Partners */}
      <section className="stellar-partners-section">
        <h2 className="partners-title">Our Stellar Partners</h2>
        <div className="partners-content">
          <img
            src={`${process.env.PUBLIC_URL}/images/partners/partner1.jpg`}
            alt="Partner 1"
            className="partner-logo"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/partners/partner2.jpg`}
            alt="Partner 2"
            className="partner-logo"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/partners/partner3.png`}
            alt="Partner 3"
            className="partner-logo"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/partners/partner4.png`}
            alt="Partner 4"
            className="partner-logo"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/partners/partner5.jpg`}
            alt="Partner 5"
            className="partner-logo"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/partners/partner6.png`}
            alt="Partner 6"
            className="partner-logo"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
