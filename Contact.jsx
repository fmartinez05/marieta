import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-12 pb-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-800 mb-4">Estamos aquí para ayudarte</h1>
          <p className="text-gray-500 font-light">Contáctanos para resolver tus dudas o conocer el centro.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información */}
          <div>
            <div className="bg-slate-50 p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-medium text-marieta-dark mb-6">Datos de contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm text-marieta-primary mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Teléfono & WhatsApp</p>
                    <p className="text-lg text-gray-700 font-normal">+34 654 212 212</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm text-marieta-primary mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Email</p>
                    <p className="text-lg text-gray-700 font-normal">info@marietadesarrollo.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm text-marieta-primary mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Ubicación</p>
                    <p className="text-lg text-gray-700 font-normal">Tu Dirección Aquí, Ciudad</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">Síguenos en redes</p>
                <div className="flex gap-4">
                   <a href="https://instagram.com/marieta" className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors">
                     <Instagram size={20} /> @marieta
                   </a>
                   <a href="https://facebook.com/marieta" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                     <Facebook size={20} /> Marieta
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Simple */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-medium text-marieta-dark mb-6">Envíanos un mensaje</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Nombre</label>
                  <input type="text" className="input-field" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Apellidos</label>
                  <input type="text" className="input-field" placeholder="Tus apellidos" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input type="email" className="input-field" placeholder="ejemplo@correo.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Mensaje</label>
                <textarea rows="4" className="input-field" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button className="w-full bg-marieta-dark text-white py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;