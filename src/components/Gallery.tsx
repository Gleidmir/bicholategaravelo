import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
      alt: 'Golden Retriever após banho e tosa',
      category: 'Antes e Depois'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg',
      alt: 'Gato persa após tratamento especial',
      category: 'Cuidados Especiais'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
      alt: 'Poodle após tosa higiênica',
      category: 'Tosa Profissional'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      alt: 'Bulldog francês relaxando após spa',
      category: 'Spa Canino'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1458909/pexels-photo-1458909.jpeg',
      alt: 'Husky siberiano feliz após banho',
      category: 'Banho Premium'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg',
      alt: 'Yorkshire após escovação',
      category: 'Cuidados Diários'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg',
      alt: 'Gato siamês relaxado',
      category: 'Bem-estar Felino'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
      alt: 'Pastor alemão após cuidados completos',
      category: 'Resultado Final'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Galeria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Transformações</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como nossos clientes ficam felizes e lindos após nossos cuidados especiais. 
            Cada pet é único e merece um tratamento personalizado.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Pets Atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5.0</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                {galleryImages[selectedImage].category}
              </span>
              <p className="text-white font-medium">{galleryImages[selectedImage].alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;