import React from 'react';
import { Scissors, Droplets, Sparkles, Heart, Clock, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Banho Completo',
      description: 'Banho com produtos premium, hidratação e secagem especializada',
      price: 'A partir de R$ 35',
      features: ['Shampoo Premium', 'Condicionador', 'Secagem', 'Perfume'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Scissors,
      title: 'Tosa Higiênica',
      description: 'Corte especializado respeitando o bem-estar do seu pet',
      price: 'A partir de R$ 45',
      features: ['Corte Profissional', 'Aparar Unhas', 'Limpeza Ouvidos', 'Finalização'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Hidratação Especial',
      description: 'Tratamento intensivo para pelos ressecados e pele sensível',
      price: 'A partir de R$ 55',
      features: ['Máscara Hidratante', 'Óleos Especiais', 'Massagem', 'Proteção UV'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Cuidados Especiais',
      description: 'Atendimento personalizado para pets idosos ou com necessidades especiais',
      price: 'Consultar',
      features: ['Atendimento Especial', 'Ambiente Calmo', 'Profissional Dedicado', 'Cuidado Extra'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cuidamos do seu pet com todo o carinho e profissionalismo que ele merece. 
            Cada serviço é pensado para o máximo conforto e bem-estar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                <service.icon className="h-12 w-12 mb-4 relative z-10" />
                <h3 className="text-xl font-bold mb-2 relative z-10">{service.title}</h3>
                <p className="text-lg font-semibold relative z-10">{service.price}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                >
                  Agendar Serviço
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Por que escolher o Bicholate?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Rapidez no Atendimento</h4>
              <p className="text-gray-600">Agendamento fácil e atendimento ágil para seu pet não ficar estressado</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Ambiente Seguro</h4>
              <p className="text-gray-600">Instalações modernas e seguras com protocolos de higiene rigorosos</p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Muito Carinho</h4>
              <p className="text-gray-600">Tratamos cada pet com o amor e cuidado que eles merecem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;