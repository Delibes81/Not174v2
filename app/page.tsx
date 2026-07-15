"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, BookOpen, ChevronRight, Scale, FileText, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-notaria-dark pt-20">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-notaria-gold/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[120px]"
          />
        </div>

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-notaria-dark/80 via-notaria-dark/60 to-notaria-dark z-10" />
           {/* Subtle Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-10"></div>
           <img 
            src="/Notario 174.webp" 
            alt="Notaría 174 Fondo" 
            className="w-full h-full object-cover opacity-30 object-top"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 p-4 rounded-full bg-notaria-gold/10 border border-notaria-gold/30 backdrop-blur-md text-notaria-gold shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <Scale size={40} strokeWidth={1.5} />
          </motion.div>

          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block py-1 px-4 rounded-full border border-notaria-gold/50 text-notaria-gold text-xs font-semibold tracking-widest uppercase mb-6 bg-notaria-dark/50 backdrop-blur-sm"
          >
            Notaría 174 de la Ciudad de México
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 max-w-4xl mx-auto text-balance drop-shadow-xl"
          >
            Seguridad Jurídica con <br className="hidden md:block"/>
            <span className="text-notaria-gold italic font-light relative inline-block">
              Trato Humano
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-notaria-gold to-transparent opacity-70"></span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-notaria-light/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Más de tres décadas otorgando certeza legal a través de la escucha activa, ética intachable y profesionalismo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-notaria-gold text-notaria-dark font-semibold text-lg rounded-full hover:bg-yellow-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] group"
            >
              Agendar Asesoría
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium text-lg rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all backdrop-blur-md"
            >
              Nuestros Servicios
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Por qué elegirnos / Features */}
      <section className="py-24 bg-notaria-light relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-notaria-gold/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-notaria-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Nuestro Compromiso</span>
            <h2 className="font-serif text-4xl md:text-5xl text-notaria-dark font-bold">Pilares de Nuestra Función</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: ShieldCheck,
                title: "Certeza Absoluta",
                desc: "Garantizamos la legalidad de su patrimonio con el más alto rigor profesional y ético en cada acto notarial."
              },
              {
                icon: Users,
                title: "Mediación y Diálogo",
                desc: "Únicos en ofrecer Mediación Privada Certificada para resolver conflictos de forma pacífica y eficiente sin llegar a tribunales."
              },
              {
                icon: BookOpen,
                title: "Vanguardia Jurídica",
                desc: "Apoyados en la docencia y estudio constante, aplicamos el derecho notarial moderno para brindar las mejores soluciones."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-notaria-gold/20"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-notaria-gold/10 to-transparent flex items-center justify-center mb-6 text-notaria-gold group-hover:scale-110 group-hover:bg-notaria-gold group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-notaria-dark mb-4">{feature.title}</h3>
                <p className="text-notaria-dark/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resumen del Notario */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-notaria-gold/10 transform translate-x-4 translate-y-4 rounded-3xl"></div>
              <img 
                src="/Notario 174.webp" 
                alt="Víctor Rafael Aguilar Molina" 
                className="relative z-10 w-full rounded-3xl shadow-2xl object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-notaria-dark text-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-notaria-gold/30">
                <p className="font-serif text-lg font-bold">Más de 30 años</p>
                <p className="text-sm text-notaria-gold mt-1">de experiencia notarial</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-notaria-gold font-semibold tracking-widest uppercase text-sm mb-4 block">El Titular</span>
              <h2 className="font-serif text-4xl md:text-5xl text-notaria-dark font-bold mb-6">
                Lic. Víctor Rafael Aguilar Molina
              </h2>
              <div className="w-20 h-1 bg-notaria-gold mb-8 rounded-full"></div>
              
              <p className="text-lg text-notaria-dark/80 mb-6 leading-relaxed">
                Titular de la Notaría 174 de la Ciudad de México desde 1992. Su trayectoria se distingue por un firme compromiso con la ética, el rigor académico y un trato cercano con quienes depositan en él su confianza.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Presidente del Consejo del Colegio de Notarios (2026-2027)",
                  "Mediador Privado Certificado #54 (desde 2012)",
                  "Catedrático en la Facultad de Derecho (UNAM)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-notaria-gold w-5 h-5 flex-shrink-0" />
                    <span className="text-notaria-dark/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/el-notario"
                className="inline-flex items-center gap-2 text-notaria-gold font-semibold hover:text-yellow-600 transition-colors group"
              >
                Conoce más sobre el Notario
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 relative overflow-hidden bg-notaria-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-notaria-dark via-notaria-dark/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:30px_30px] z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
              Proteja su patrimonio con la <span className="text-notaria-gold">seguridad</span> que merece.
            </h2>
            <p className="text-lg text-notaria-light/80 mb-10 max-w-2xl">
              Estamos aquí para escucharle y encontrar la solución jurídica ideal para usted o su empresa. Agende una asesoría personalizada hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-notaria-gold text-notaria-dark font-semibold rounded-full hover:bg-yellow-500 transition-all shadow-lg"
              >
                Contáctenos
              </Link>
              <a 
                href="tel:5556640064"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-notaria-gold/50 text-notaria-gold font-semibold rounded-full hover:bg-notaria-gold/10 transition-all"
              >
                Llamar al 55 5664 0064
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
