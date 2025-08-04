import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Calendar, ExternalLink, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [showScheduling, setShowScheduling] = useState(false);

  const handleMapsClick = () => {
    window.open('https://www.google.com/maps/place/Bicholate+Pet+Shop+e+Banho+e+Tosa+Garavelo/@-16.7688357,-49.3469123,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef7f492e97dcd:0xffb94899080712f7!8m2!3d-16.7688357!4d-49.3469123!16s%2Fg%2F11cp5qyw0m?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const openScheduling = () => {
    setShowScheduling(true);
  };

  const closeScheduling = () => {
    setShowScheduling(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Agende <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Agora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reserve o horário ideal para seu pet e garante o mimo especial! 
            Atendimento rápido e carinhoso para deixar seu amiguinho lindo e feliz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Scheduling CTA Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Agendamento Online
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sistema de agendamento integrado com Google Calendar. 
                Escolha o melhor horário para seu pet de forma rápida e prática.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-blue-600 font-semibold text-sm">⚡ Instantâneo</div>
                  <div className="text-gray-600 text-xs">Confirmação imediata</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-green-600 font-semibold text-sm">📱 Prático</div>
                  <div className="text-gray-600 text-xs">Pelo celular ou PC</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-purple-600 font-semibold text-sm">🔔 Lembrete</div>
                  <div className="text-gray-600 text-xs">Notificação automática</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-orange-600 font-semibold text-sm">⏰ 24h</div>
                  <div className="text-gray-600 text-xs">Disponível sempre</div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={openScheduling}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                <Calendar className="h-6 w-6 mr-3 group-hover:animate-pulse" />
                Abrir Agenda de Horários
                <ExternalLink className="h-5 w-5 ml-3 opacity-75 group-hover:opacity-100" />
              </button>

              <p className="text-sm text-gray-500 mt-4">
                🎁 <span className="font-medium">Bônus:</span> Agendando online você ganha um mimo especial!
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Business Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">Av. Lago dos Patos, Qd 31 - Lt 02 - Jardim Tropical, Aparecida<br />Garavelo - Ap.Goiânia, Go<br />CEP: 74946-530</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">(62) 98407-4891<br />WhatsApp disponível das 08:00 as 18:00hs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sábado: 8h às 18h<br />
                      Domingo: Não Atendemos Presencialmente.<br />
                      <span className="text-green-600 font-medium">Agendamento 24h online</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@bicholatepetshop.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🎁 Oferta Especial!</h3>
              <p className="text-lg mb-4 opacity-90">
                Agende agora e ganhe um mimo especial para seu pet!
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>✅ Perfume premium incluso</li>
                <li>✅ Fotografia profissional</li>
                <li>✅ Desconto de 10% no próximo agendamento</li>
                <li>✅ Avaliação completa gratuita</li>
              </ul>
            </div>

            {/* Google Maps Link */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Como Chegar</h3>
              <button
                onClick={handleMapsClick}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="h-12 w-12 text-white mr-3" />
                  <ExternalLink className="h-6 w-6 text-white opacity-75 group-hover:opacity-100" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2">Ver no Google Maps</h4>
                  <p className="text-red-100 text-sm leading-relaxed">
                    Av. Lago dos Patos, qd 31 - lt 02<br />
                    Jardim Tropical, Aparecida de Goiânia - GO<br />
                    CEP: 74946-530 - Garavelo
                  </p>
                  <div className="mt-4 bg-white/20 rounded-lg p-2 inline-block">
                    <span className="text-sm font-medium">🗺️ Clique para abrir no Google Maps</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Agendamento */}
      {showScheduling && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold">Agendamento Online</h3>
                  <p className="text-blue-100">Escolha o melhor horário para seu pet</p>
                </div>
              </div>
              <button
                onClick={closeScheduling}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-4 bg-blue-50 rounded-lg p-4">
                <div className="flex items-center text-blue-800">
                  <div className="bg-blue-200 rounded-full p-2 mr-3">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sistema Integrado Google Calendar</h4>
                    <p className="text-sm text-blue-600">Selecione data e horário disponível abaixo</p>
                  </div>
                </div>
              </div>

              {/* Google Calendar Iframe */}
              <div className="rounded-lg overflow-hidden shadow-inner border-2 border-gray-100">
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ01RzJnLAWtvENG6sFUbgrtWI9OaFmvkfP4f5TlCcbP2NgFjFgEaVDpsuc4SvB0h1vCgLWKU8BE?gv=true" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="500" 
                  frameBorder="0"
                  title="Agendamento Bicholate Pet Shop"
                />
              </div>

              {/* Modal Footer */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Horários disponíveis em tempo real</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    <span>Dúvidas? (62) 98407-4891</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;