"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-tertiary/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-tertiary font-semibold tracking-widest uppercase text-sm mb-4 block">Estamos para escucharle</span>
          <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold mb-6">
            Contacto
          </h1>
          <div className="w-16 h-1 bg-tertiary mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
            Agende una asesoría personalizada. Nuestro equipo está listo para brindarle la certeza jurídica que su patrimonio necesita.
          </p>
        </motion.div>

        <div className="flex flex-col space-y-12 lg:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-primary/5 h-full">
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">Información de Contacto</h2>
              
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">Dirección</h3>
                      <p className="text-primary/70 leading-relaxed">
                        Guty Cárdenas #48, Col. Guadalupe Inn,<br />
                        Alcaldía Álvaro Obregón, C.P. 01020,<br />
                        Ciudad de México.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">Teléfonos</h3>
                      <a href="tel:5556640064" className="text-primary/70 hover:text-tertiary transition-colors block">55 5664 0064</a>
                      <a href="tel:5556640065" className="text-primary/70 hover:text-tertiary transition-colors block">55 5664 0065</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">Correo Electrónico</h3>
                      <a href="mailto:notario@notaria174cdmx.com.mx" className="text-primary/70 hover:text-tertiary transition-colors break-all">
                        notario@notaria174cdmx.com.mx
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">Horario de Atención</h3>
                      <p className="text-primary/70">
                        Lunes a Jueves: 9:00 am a 6:00 pm<br />
                        Viernes: 9:00 am a 3:00 pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-secondary rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-[50px] pointer-events-none"></div>
                
                <h2 className="font-serif text-3xl font-bold text-white mb-2">Envíenos un mensaje</h2>
                <p className="text-background/70 mb-8 font-light">Por favor complete el formulario y nos pondremos en contacto con usted a la brevedad.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-background/90">Nombre completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-white/5 border border-tertiary/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-background/90">Correo electrónico</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-white/5 border border-tertiary/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-background/90">Teléfono</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-white/5 border border-tertiary/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                        placeholder="55 0000 0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-background/90">Asunto o Servicio de Interés</label>
                    <select 
                      id="service" 
                      defaultValue=""
                      className="w-full bg-[#35251a] border border-tertiary/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all appearance-none"
                    >
                      <option value="" disabled>Seleccione una opción...</option>
                      <option value="testamentos">Testamentos o Sucesiones</option>
                      <option value="compraventas">Compraventas y Fideicomisos</option>
                      <option value="sociedades">Sociedades y Actas Corporativas</option>
                      <option value="poderes">Poderes o Fe de Hechos</option>
                      <option value="mediacion">Mediación Privada</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-background/90">Mensaje</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-white/5 border border-tertiary/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all resize-none"
                      placeholder="Describa brevemente en qué podemos ayudarle..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-tertiary text-primary font-bold text-lg rounded-xl px-8 py-4 hover:bg-secondary hover:text-white hover:scale-[1.02] transition-all shadow-lg flex items-center justify-center gap-3 group"
                  >
                    Enviar Mensaje
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Embedded Map Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full h-80 md:h-[450px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-primary/5 relative"
          >
            <iframe
              src="https://maps.google.com/maps?q=Guty%20Cardenas%2048%2C%20Guadalupe%20Inn%2C%20Alvaro%20Obregon%2C%2001020%20Ciudad%20de%20Mexico&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
}


