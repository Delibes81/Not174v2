"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-notaria-light pt-32 pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-notaria-gold/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-notaria-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Estamos para escucharle</span>
          <h1 className="font-serif text-5xl md:text-6xl text-notaria-dark font-bold mb-6">
            Contacto
          </h1>
          <div className="w-16 h-1 bg-notaria-gold mx-auto mb-6"></div>
          <p className="text-lg text-notaria-dark/70 max-w-2xl mx-auto font-light leading-relaxed">
            Agende una asesoría personalizada. Nuestro equipo está listo para brindarle la certeza jurídica que su patrimonio necesita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-notaria-dark/5">
              <h2 className="font-serif text-3xl font-bold text-notaria-dark mb-8">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-notaria-gold/10 flex items-center justify-center text-notaria-gold flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-notaria-dark text-lg mb-1">Dirección</h3>
                    <p className="text-notaria-dark/70 leading-relaxed">
                      Guty Cárdenas #48, Col. Guadalupe Inn,<br />
                      Alcaldía Álvaro Obregón, C.P. 01020,<br />
                      Ciudad de México.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-notaria-gold/10 flex items-center justify-center text-notaria-gold flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-notaria-dark text-lg mb-1">Teléfonos</h3>
                    <a href="tel:5556640064" className="text-notaria-dark/70 hover:text-notaria-gold transition-colors block">55 5664 0064</a>
                    <a href="tel:5556640065" className="text-notaria-dark/70 hover:text-notaria-gold transition-colors block">55 5664 0065</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-notaria-gold/10 flex items-center justify-center text-notaria-gold flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-notaria-dark text-lg mb-1">Correo Electrónico</h3>
                    <a href="mailto:notario@notaria174cdmx.com.mx" className="text-notaria-dark/70 hover:text-notaria-gold transition-colors break-all">
                      notario@notaria174cdmx.com.mx
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-notaria-gold/10 flex items-center justify-center text-notaria-gold flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-notaria-dark text-lg mb-1">Horario de Atención</h3>
                    <p className="text-notaria-dark/70">
                      Lunes a Jueves: 9:00 am a 6:00 pm<br />
                      Viernes: 9:00 am a 3:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded Map Area */}
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-notaria-dark/5 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                [Espacio para mapa de Google Maps]
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-notaria-dark rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-notaria-gold/10 rounded-full blur-[50px] pointer-events-none"></div>
              
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Envíenos un mensaje</h2>
              <p className="text-notaria-light/70 mb-8 font-light">Por favor complete el formulario y nos pondremos en contacto con usted a la brevedad.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-notaria-light/90">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-notaria-gold/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-notaria-gold focus:ring-1 focus:ring-notaria-gold transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-notaria-light/90">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/5 border border-notaria-gold/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-notaria-gold focus:ring-1 focus:ring-notaria-gold transition-all"
                      placeholder="ejemplo@correo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-notaria-light/90">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-white/5 border border-notaria-gold/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-notaria-gold focus:ring-1 focus:ring-notaria-gold transition-all"
                      placeholder="55 0000 0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-notaria-light/90">Asunto o Servicio de Interés</label>
                  <select 
                    id="service" 
                    className="w-full bg-[#35251a] border border-notaria-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-notaria-gold focus:ring-1 focus:ring-notaria-gold transition-all appearance-none"
                  >
                    <option value="" disabled selected>Seleccione una opción...</option>
                    <option value="testamentos">Testamentos o Sucesiones</option>
                    <option value="compraventas">Compraventas y Fideicomisos</option>
                    <option value="sociedades">Sociedades y Actas Corporativas</option>
                    <option value="poderes">Poderes o Fe de Hechos</option>
                    <option value="mediacion">Mediación Privada</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-notaria-light/90">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-white/5 border border-notaria-gold/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-notaria-gold focus:ring-1 focus:ring-notaria-gold transition-all resize-none"
                    placeholder="Describa brevemente en qué podemos ayudarle..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-notaria-gold text-notaria-dark font-bold text-lg rounded-xl px-8 py-4 hover:bg-yellow-500 hover:scale-[1.02] transition-all shadow-lg flex items-center justify-center gap-3 group"
                >
                  Enviar Mensaje
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
