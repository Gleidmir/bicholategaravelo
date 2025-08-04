import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>(62) 98407-4891</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>Garavelo, Aparecida de Goiânia-Go</span>
            </div>
          </div>
          <div className="text-blue-700 font-medium">
            Seg-Sáb: 8h às 18h | Dom: Não Atendemos.
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-2 mr-3">
                <div className="text-white font-bold text-xl">🐾</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Bicholate</h1>
                <p className="text-sm text-gray-600">Pet Shop Garavelo</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Produtos
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Galeria
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden lg:block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Agendar Agora
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Início
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Produtos
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Galeria
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                Contato
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Agendar Agora
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;