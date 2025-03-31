import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';



const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us-container">
      <h2>{t('who_we_are')}</h2>
      <p>{t('description_who_we_are')}</p>
      <h2>Welcome to NicaVibes Tours</h2>
      <p>
        Experience Nicaragua like never before with NicaVibes Tours, a 100% Nicaraguan tour operator with over 15 years of expertise in the travel industry. 
        We bring a fresh, innovative, and professional approach to tourism, dedicated to delivering exceptional, high-quality experiences.
      </p>
      <p>
        Discover Nicaragua's most iconic destinations with our expertly designed tours, including:
        <ul>
          <li>León: Volcano Boarding, Isla Juan Venado, and City Tours.</li>
          <li>Granada: Isletas, Mombacho Volcano, and Masaya Volcano.</li>
          <li>San Juan del Sur, Ometepe Island, the Nicaraguan Caribbean, and so much more!</li>
        </ul>
      </p>
      <p>
        We also specialize in providing safe and reliable transportation services across Nicaragua and throughout Central America, ensuring seamless logistics tailored to your needs.
      </p>
      <p>
        As experts in representing wholesalers, we take pride in managing travel experiences for their customers visiting Nicaragua, ensuring that every detail reflects the highest standards of service and professionalism.
      </p>
      <p>
        At NicaVibes Tours, your journey goes beyond travel—it’s about creating unforgettable memories while you Relax, Live, and Travel.
      </p>
      <h3>NicaVibes Tours: Your Adventure Starts Here.</h3>
    </div>
  );
};

export default AboutUs;
