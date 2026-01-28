import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-100 font-poppins pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1 */}
          <div>
            <h3 className="text-lg font-medium text-marieta-dark mb-4">Marieta</h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-4">
              Centro especializado en desarrollo infantil. Abordaje multidisciplinar para acompañar el futuro de tu hijo.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/marieta" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/marieta" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-lg font-medium text-marieta-dark mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-500 font-light text-sm">
                <MapPin size={18} className="mr-2 text-marieta-primary flex-shrink-0" />
                <span>Calle Ejemplo 123, Ciudad, España</span>
              </li>
              <li className="flex items-center text-gray-500 font-light text-sm">
                <Phone size={18} className="mr-2 text-marieta-primary flex-shrink-0" />
                <span>+34 654 212 212</span>
              </li>
              <li className="flex items-center text-gray-500 font-light text-sm">
                <Mail size={18} className="mr-2 text-marieta-primary flex-shrink-0" />
                <span>contacto@marietadesarrollo.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-lg font-medium text-marieta-dark mb-4">Horario</h3>
            <p className="text-gray-500 font-light text-sm mb-2">Lunes a Viernes</p>
            <p className="text-gray-600 font-normal text-sm">09:00 - 13:30</p>
            <p className="text-gray-600 font-normal text-sm mb-4">16:00 - 20:00</p>
            <p className="text-xs text-gray-400 font-light mt-6">
              © {new Date().getFullYear()} Marieta Centro de Desarrollo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
