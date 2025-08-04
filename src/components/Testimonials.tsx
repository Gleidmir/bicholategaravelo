import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      petName: 'Luna',
      petType: 'Golden Retriever',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      petPhoto: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
      rating: 5,
      text: 'Simplesmente o melhor pet shop de Garavelo! A Luna sempre fica linda e cheirosa. O atendimento é excepcional e você vê que eles realmente amam os animais.',
      date: '2 semanas atrás'
    },
    {
      id: 2,
      name: 'João Santos',
      petName: 'Thor',
      petType: 'Husky Siberiano',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      petPhoto: 'https://images.pexels.com/photos/1458909/pexels-photo-1458909.jpeg',
      rating: 5,
      text: 'Thor sempre foi um cão muito agitado e difícil de cuidar. No Bicholate, ele fica calmo e confiante. Os profissionais sabem exatamente como lidar com cada temperamento.',
      date: '1 mês atrás'
    },
    {
      id: 3,
      name: 'Ana Costa',
      petName: 'Mel e Bolinha',
      petType: 'Gatos Persa',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
      petPhoto: 'https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg',
      rating: 5,
      text: 'Trago meus dois gatos persas há mais de 2 anos. Eles chegam estressados e saem relaxados e lindos. Ambiente muito limpo e equipe super carinhosa!',
      date: '3 semanas atrás'
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      petName: 'Rex',
      petType: 'Pastor Alemão',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      petPhoto: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg',
      rating: 5,
      text: 'Rex é um cão de grande porte e nem todos os lugares conseguem cuidar bem dele. Aqui no Bicholate ele é tratado como um rei. Recomendo de olhos fechados!',
      date: '1 semana atrás'
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      petName: 'Princesa',
      petType: 'Poodle Toy',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      petPhoto: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
      rating: 5,
      text: 'A Princesa é muito mimada e exigente. Só confio no Bicholate para cuidar dela. Sempre sai um amor de pet e eu fico tranquila sabendo que está em boas mãos.',
      date: '4 dias atrás'
    },
    {
      id: 6,
      name: 'Roberto Souza',
      petName: 'Buddy',
      petType: 'Bulldog Francês',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      petPhoto: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      rating: 5,
      text: 'Buddy tem problemas respiratórios e precisa de cuidados especiais. A equipe do Bicholate é super atenciosa e experiente. Confiança total!',
      date: '5 dias atrás'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que dizem nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes e o bem-estar dos pets são nossa maior conquista. 
            Veja o que eles falam sobre nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-3">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">{testimonial.date}</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="flex space-x-3">
                  {/* Client Avatar */}
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                  />
                  {/* Pet Photo */}
                  <img 
                    src={testimonial.petPhoto} 
                    alt={testimonial.petName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-200"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    Tutora do {testimonial.petName} ({testimonial.petType})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Pets Felizes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-blue-100">Avaliação Google</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Suporte WhatsApp</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Quer fazer parte dessa família?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Agende agora e descubra por que somos o pet shop mais amado de Garavelo. 
            Seu pet merece esse carinho especial!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            🎁 Agendar e Ganhar Mimo Especial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;