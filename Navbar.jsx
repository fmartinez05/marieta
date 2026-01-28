import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              {/* Logotipo desde localhost */}
              <img className="h-12 w-auto object-contain" src="/image1.jpg" alt="Marieta Logo" />
              <div className="hidden md:block">
                <span className="block text-xl font-medium text-marieta-dark tracking-wide">MARIETA</span>
                <span className="block text-xs font-light text-gray-500 tracking-widest uppercase">Centro de Desarrollo Infantil</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-marieta-primary font-light transition-colors">Inicio</Link>
            <Link to="/servicios" className="text-gray-600 hover:text-marieta-primary font-light transition-colors">Servicios</Link>
            <Link to="/contacto" className="text-gray-600 hover:text-marieta-primary font-light transition-colors">Contacto</Link>
            <Link to="/cita" className="bg-marieta-primary text-white px-6 py-2 rounded-full font-light hover:bg-marieta-dark transition-all shadow-md">
              Pedir Cita
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-marieta-primary focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 font-light hover:text-marieta-primary">Inicio</Link>
            <Link to="/servicios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 font-light hover:text-marieta-primary">Servicios</Link>
            <Link to="/contacto" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 font-light hover:text-marieta-primary">Contacto</Link>
            <Link to="/cita" onClick={() => setIsOpen(false)} className="block mt-4 w-full text-center bg-marieta-primary text-white px-5 py-3 rounded-md font-light">
              Pedir Cita
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;