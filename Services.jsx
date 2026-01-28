import React from 'react';

const servicesList = [
  {
    title: "Integración Sensorial",
    description: "Trabajo especializado con niños que presentan dificultades para procesar estímulos (ruidos, texturas, movimiento, equilibrio).",
    icon: "🧩"
  },
  {
    title: "Dificultades de Alimentación",
    description: "Abordaje de problemas para masticar, tragar, aceptar nuevos alimentos o casos de selectividad alimentaria severa.",
    icon: "🍎"
  },
  {
    title: "TEA – TDAH",
    description: "Intervención especializada en Trastorno del Espectro Autista y Trastorno por Déficit de Atención con o sin Hiperactividad.",
    icon: "🧠"
  },
  {
    title: "Trastornos del Desarrollo",
    description: "Atención global a retrasos madurativos o alteraciones genéticas que afectan al desarrollo infantil.",
    icon: "📈"
  },
  {
    title: "Dificultades de Aprendizaje",
    description: "Apoyo en procesos cognitivos, lectoescritura, lenguaje, atención y habilidades necesarias para la escuela.",
    icon: "📚"
  },
  {
    title: "Prematuridad",
    description: "Seguimiento exhaustivo y estimulación temprana para niños nacidos antes de término para asegurar sus hitos motores y cognitivos.",
    icon: "👶"
  },
  {
    title: "Dispraxia",
    description: "Tratamiento enfocado en mejorar las dificultades en la coordinación motora, planificación de movimientos y motricidad fina.",
    icon: "🖐️"
  }
];

const Services = () => {
  return (
    <div className="pt-10 pb-20 font-poppins">
      <div className="bg-marieta-primary py-16 mb-12 text-white text-center">
        <h1 className="text-4xl font-light mb-4">Nuestras Áreas de Intervención</h1>
        <p className="font-light text-marieta-light max-w-2xl mx-auto px-4">
          Ofrecemos un enfoque clínico y educativo para abordar las diferentes etapas y retos del desarrollo infantil.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-marieta-dark mb-3">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;