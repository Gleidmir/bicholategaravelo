import React from 'react';
import { Star, Shield, Heart, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
        {/* Placeholder for video - in production, replace with actual video */}
        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 opacity-80"></div>
        <img 
          src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg" 
          alt="Pet care background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Seu Pet Merece o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Melhor</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cuide com carinho, agende agora e veja a transformação! 
            Profissionais treinados em ambiente seguro e acolhedor.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-white font-semibold">5 Estrelas</p>
            <p className="text-gray-300 text-sm">Avaliação</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
            <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <p className="text-white font-semibold">100% Seguro</p>
            <p className="text-gray-300 text-sm">Ambiente</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
            <Heart className="h-8 w-8 text-red-400 mx-auto mb-2" />
            <p className="text-white font-semibold">Muito Amor</p>
            <p className="text-gray-300 text-sm">Cuidado</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
            <Calendar className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <p className="text-white font-semibold">Rápido</p>
            <p className="text-gray-300 text-sm">Agendamento</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[280px]"
          >
            🎁 Agende e Ganhe um Mimo Especial!
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 min-w-[280px]"
          >
            Conhecer Serviços
          </button>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-sm mb-2">Mais de 1000 pets felizes em Garavelo</p>
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="text-white ml-2 font-semibold">4.9/5.0</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;