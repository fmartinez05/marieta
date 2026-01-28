import React from 'react';

const Booking = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-poppins py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-marieta-primary p-10 text-center">
            <h1 className="text-3xl font-light text-white mb-2">Solicitud de Cita</h1>
            <p className="text-marieta-light font-light">Completa el formulario y nos pondremos en contacto contigo en menos de 24h para confirmar disponibilidad.</p>
          </div>
          
          <div className="p-10">
            <form className="space-y-6">
              
              {/* Datos del Padre/Madre */}
              <div>
                <h3 className="text-lg font-medium text-marieta-dark mb-4 border-b pb-2">Datos del Tutor Legal</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Nombre Completo</label>
                    <input type="text" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Teléfono</label>
                    <input type="tel" className="input-field" placeholder="+34" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <input type="email" className="input-field" />
                  </div>
                </div>
              </div>

              {/* Datos del Niño y Motivo */}
              <div className="pt-4">
                <h3 className="text-lg font-medium text-marieta-dark mb-4 border-b pb-2">Información de la Consulta</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Edad del niño/a</label>
                    <input type="text" className="input-field w-1/3" placeholder="Ej: 4 años" />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Tipo de Consulta (Motivo)</label>
                    <select className="input-field bg-white">
                      <option>Selecciona una opción...</option>
                      <option>Valoración General</option>
                      <option>Integración Sensorial</option>
                      <option>Dificultades de Alimentación</option>
                      <option>Logopedia / Lenguaje</option>
                      <option>TEA / TDAH</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Preferencia Horaria</label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="horario" className="text-marieta-primary focus:ring-marieta-primary" />
                        <span className="text-sm font-light">Mañanas</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="horario" className="text-marieta-primary focus:ring-marieta-primary" />
                        <span className="text-sm font-light">Tardes</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Observaciones</label>
                    <textarea className="input-field" rows="3" placeholder="Breve descripción del motivo de consulta..."></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-marieta-primary text-white text-lg font-medium py-4 rounded-xl hover:bg-marieta-dark transition-all shadow-lg transform hover:-translate-y-1">
                  Solicitar Cita Ahora
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Al enviar este formulario aceptas nuestra política de privacidad. Nos pondremos en contacto telefónico para confirmar la cita.
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;