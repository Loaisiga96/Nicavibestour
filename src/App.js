import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Importa el Navbar
import Home from './components/Home'; // Importa la página de inicio
import CityTourLeon from './pages/CityTourLeon'; // Asegúrate de que esta ruta sea correcta
import CookingClass from './pages/CookingClass'; // Asegúrate de que esta ruta sea correcta
import VolcanoBoarding from './pages/VolcanoBoarding'; // Añade aquí más importaciones según sea necesario
import Footer from './components/Footer'; // Importa el componente Footer
import OtherServices from './pages/OtherServices'; // Importa el componente OtherServices
import AboutUs from './pages/AboutUs'; // Importa AboutUs

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Coloca el componente Navbar aquí */}
        <div className="content-wrapper">
          {/* Envolver las rutas en un div para aplicar estilos si es necesario */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city-tour-leon" element={<CityTourLeon />} />
            <Route path="/cooking-class" element={<CookingClass />} />
            <Route path="/volcano-boarding" element={<VolcanoBoarding />} /> {/* Ruta para Volcano Boarding */}
            <Route path="/other-services" element={<OtherServices />} /> {/* Ruta para Other Services */}
            <Route path="/about-us" element={<AboutUs />} /> {/* Ruta para About Us */}
            {/* Añadir más rutas para las otras páginas de tours */}
          </Routes>
        </div>
        <Footer /> {/* Footer al final de todas las páginas */}
      </div>
    </Router>
  );
}

export default App;
