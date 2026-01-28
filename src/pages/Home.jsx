import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShieldCheck } from 'lucide-react';

const Home = () => {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative bg-marieta-light h-[85vh] flex items-center">
        {/* Nota: En un entorno real, pon una imagen de fondo con opacidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-marieta-dark font-medium tracking-widest uppercase text-sm mb-2 block">
              Centro de Desarrollo Infantil
            </span>
            <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
              El futuro de tu hijo <br />
              <span className="text-marieta-primary font-medium">empieza aquí.</span>
            </h1>
            <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
              No somos una guardería, somos un espacio terapéutico especializado en detectar y potenciar el desarrollo durante los primeros años de vida.
            </p>
            <div className="flex gap-4">
              <Link to="/cita" className="bg-marieta-primary text-white px-8 py-3 rounded-full font-medium hover:bg-marieta-dark transition-all shadow-lg">
                Solicitar Valoración
              </Link>
              <Link to="/servicios" className="bg-white text-marieta-dark border border-gray-200 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all">
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-12">Nuestro Enfoque</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-marieta-light rounded-full flex items-center justify-center mx-auto mb-6 text-marieta-primary">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3">Atención Personalizada</h3>
              <p className="text-gray-500 font-light">
                Cada niño es único. Diseñamos planes de intervención adaptados a las necesidades específicas de tu hijo y tu familia.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-marieta-light rounded-full flex items-center justify-center mx-auto mb-6 text-marieta-primary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3">Intervención Temprana</h3>
              <p className="text-gray-500 font-light">
                Detectar y tratar dificultades en los primeros años es clave. Trabajamos desde la prevención y el tratamiento precoz.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-marieta-light rounded-full flex items-center justify-center mx-auto mb-6 text-marieta-primary">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3">Multidisciplinar</h3>
              <p className="text-gray-500 font-light">
                Un equipo de psicología, logopedia y terapia ocupacional trabajando juntos por el bienestar integral del niño.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
