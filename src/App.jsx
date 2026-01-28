import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de componentes y páginas
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import ScrollToTop from './components/ScrollToTop'; // Opcional: para subir al cambiar de página

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cita" element={<Booking />} />
          </Routes>
        </main>

        <WhatsAppBtn />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
