import React from 'react';
import { ShoppingCart, Star, Truck, Shield } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Ração Premium Golden',
      description: 'Ração super premium para cães adultos de todas as raças',
      price: 'R$ 89,90',
      originalPrice: 'R$ 109,90',
      image: 'data:image/jpeg;base64,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',
      rating: 4.8,
      discount: '18%'
    },
    {
      id: 2,
      name: 'Brinquedo Interativo',
      description: 'Brinquedo educativo que estimula a inteligência do seu pet',
      price: 'R$ 34,90',
      originalPrice: 'R$ 49,90',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg',
      rating: 4.9,
      discount: '30%'
    },
    {
      id: 3,
      name: 'Shampoo Dermatológico',
      description: 'Shampoo especial para peles sensíveis e pelos delicados',
      price: 'R$ 24,90',
      originalPrice: 'R$ 32,90',
      image: 'https://images.pexels.com/photos/6130922/pexels-photo-6130922.jpeg',
      rating: 4.7,
      discount: '24%'
    },
    {
      id: 4,
      name: 'Cama Ortopédica',
      description: 'Cama confortável com suporte ortopédico para pets idosos',
      price: 'R$ 159,90',
      originalPrice: 'R$ 199,90',
      image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg',
      rating: 4.9,
      discount: '20%'
    }
  ];

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = `Olá! Tenho interesse no produto: ${productName} por ${price}. Poderia me dar mais informações?`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Produtos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Premium</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selecionamos os melhores produtos para o cuidado completo do seu pet. 
            Qualidade garantida com preços especiais.
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="flex items-center justify-center bg-blue-50 rounded-lg p-4">
            <Truck className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium text-sm">Entrega Rápida</span>
          </div>
          <div className="flex items-center justify-center bg-green-50 rounded-lg p-4">
            <Shield className="h-6 w-6 text-green-600 mr-2" />
            <span className="text-green-800 font-medium text-sm">Garantia Total</span>
          </div>
          <div className="flex items-center justify-center bg-purple-50 rounded-lg p-4">
            <Star className="h-6 w-6 text-purple-600 mr-2" />
            <span className="text-purple-800 font-medium text-sm">Qualidade Premium</span>
          </div>
          <div className="flex items-center justify-center bg-orange-50 rounded-lg p-4">
            <ShoppingCart className="h-6 w-6 text-orange-600 mr-2" />
            <span className="text-orange-800 font-medium text-sm">Compra Fácil</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{product.discount}
                </div>
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-800 mr-2">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button 
                    onClick={() => handleWhatsAppOrder(product.name, product.price)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Comprar no WhatsApp
                  </button>
                  <button className="w-full border-2 border-blue-500 text-blue-500 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            🎯 Oferta Especial para Novos Clientes!
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Ganhe 15% de desconto na primeira compra + frete grátis acima de R$ 99
          </p>
          <button 
            onClick={() => handleWhatsAppOrder('Cupom de Desconto', 'R$ 0,00')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            🎁 Quero Meu Desconto!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;