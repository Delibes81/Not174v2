"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, GraduationCap, Scale, ChevronRight, Calendar, MapPin, User, Landmark, ShieldCheck } from "lucide-react";

export default function ElNotario() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const cargos = [
    { year: "2026 - 2027", title: "Presidente del Consejo", entity: "Colegio de Notarios de la Ciudad de México, A.C." },
    { year: "2020 - 2022", title: "Primer Vocal Vicepresidente del Consejo", entity: "Colegio de Notarios de la Ciudad de México, A.C." },
    { year: "2019 - 2020", title: "Presidente de la Subcomisión FOVISSSTE", entity: "Colegio de Notarios de la Ciudad de México, A.C." },
    { year: "2016 - 2018", title: "Secretario Académico del Consejo Directivo", entity: "Colegio Nacional del Notariado Mexicano, A.C." },
    { year: "2013 - 2014", title: "Vicepresidente del Consejo", entity: "Colegio de Notarios del Distrito Federal, A.C." },
    { year: "2010 - 2011", title: "Presidente de la Subcomisión FOVISSSTE", entity: "Colegio de Notarios del Distrito Federal, A.C." },
    { year: "2010", title: "Presidente de la Comisión de la Revista", entity: "Colegio de Notarios del Distrito Federal, A.C." },
    { year: "2004 - 2006", title: "Primer Secretario Suplente del Consejo", entity: "Colegio de Notarios del Distrito Federal, A.C." },
    { year: "2001 - 2002", title: "Secretario de Organización del Consejo Directivo", entity: "Asociación Nacional del Notariado Mexicano, A.C." },
  ];

  return (
    <div className="min-h-screen bg-notaria-light pt-24" ref={containerRef}>
      {/* Header Profile with Parallax */}
      <section className="relative h-[65vh] md:h-[75vh] overflow-hidden bg-notaria-dark">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-10 pointer-events-none"></div>

        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/Notario 174.webp" 
            alt="Víctor Rafael Aguilar Molina" 
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-notaria-dark via-notaria-dark/60 to-transparent z-10" />
        </motion.div>
        
        <div className="relative z-20 h-full flex items-end pb-16">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-notaria-gold/20 border border-notaria-gold/40 rounded-full backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 text-notaria-gold" />
                  <span className="text-notaria-gold text-xs font-semibold uppercase tracking-widest">Titular de la Notaría 174</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                  <Scale className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-semibold uppercase tracking-widest">Mediador Privado #54</span>
                </div>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
                Víctor Rafael <br className="hidden md:block"/> Aguilar Molina
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-notaria-light/80 text-sm md:text-base font-light tracking-wide border-l-2 border-notaria-gold pl-4">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> CDMX</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Nacimiento: 1954</span>
                <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> Ejercicio Notarial desde 1992</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Blob */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-notaria-gold/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Intro & Memberships */}
            <div className="lg:col-span-5 space-y-16">
              
              {/* Resumen */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-notaria-dark mb-6">
                  Trayectoria Profesional
                </h2>
                <div className="w-16 h-1 bg-notaria-gold mb-8"></div>
                
                <div className="prose prose-lg text-notaria-dark/70 leading-relaxed">
                  <p>
                    Desde su nombramiento en 1992 como Titular de la Notaría #174 del Distrito Federal, el Lic. Víctor Rafael Aguilar Molina ha construido una destacada trayectoria cimentada en la ética y el rigor técnico.
                  </p>
                  <p>
                    En 1996 fue designado <strong>Notario del Patrimonio Inmobiliario Federal</strong>, y en 2012 obtuvo la certificación como <strong>Mediador Privado #54</strong>, consolidando su enfoque en la resolución alternativa de conflictos y la paz social.
                  </p>
                </div>
              </motion.div>

              {/* Afiliaciones */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-notaria-gold/10"
              >
                <h3 className="font-serif text-2xl font-bold text-notaria-dark mb-6 flex items-center gap-3">
                  <Landmark className="w-6 h-6 text-notaria-gold" />
                  Colegiación Activa
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-notaria-light/50 transition-colors">
                    <div className="mt-1 w-2 h-2 rounded-full bg-notaria-gold flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-notaria-dark">Colegio de Notarios de la Ciudad de México, A.C.</p>
                      <p className="text-sm text-notaria-dark/50">Miembro desde 1992</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-notaria-light/50 transition-colors">
                    <div className="mt-1 w-2 h-2 rounded-full bg-notaria-gold flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-notaria-dark">Colegio Nacional del Notariado Mexicano, A.C.</p>
                      <p className="text-sm text-notaria-dark/50">Miembro desde 1993</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Formación Académica */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-notaria-dark text-white p-8 rounded-3xl shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-notaria-gold/10 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-notaria-gold" />
                  Formación Académica
                </h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="relative pl-6 border-l border-notaria-gold/30">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-notaria-gold"></div>
                    <p className="text-notaria-gold text-sm font-semibold mb-1">1978</p>
                    <p className="font-bold text-lg mb-1">Licenciatura en Derecho</p>
                    <p className="text-notaria-light/70 text-sm mb-2">Escuela Libre de Derecho</p>
                    <p className="text-xs text-notaria-light/40">Cédula Profesional: 557991</p>
                  </div>
                  
                  <div className="relative pl-6 border-l border-notaria-gold/30">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-notaria-gold"></div>
                    <p className="text-notaria-gold text-sm font-semibold mb-1">1990</p>
                    <p className="font-bold text-lg mb-1">Maestría en Derecho Económico</p>
                    <p className="text-notaria-light/70 text-sm mb-2">Universidad Autónoma Metropolitana (UAM)</p>
                    <p className="text-xs text-notaria-light/40">Cédula Profesional: 1525463</p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Timeline of Cargos */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-notaria-dark/5"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-notaria-gold/10 flex items-center justify-center text-notaria-gold">
                    <User className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-notaria-dark font-bold">Cargos Directivos</h3>
                    <p className="text-notaria-dark/50 text-sm mt-1">Participación institucional a nivel local y nacional</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {cargos.map((cargo, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start p-6 rounded-2xl border border-transparent hover:border-notaria-gold/20 hover:bg-notaria-gold/5 transition-all duration-300"
                    >
                      <div className="md:w-1/4 flex-shrink-0">
                        <span className="inline-block px-3 py-1 bg-notaria-dark text-white text-sm font-semibold rounded-full group-hover:bg-notaria-gold group-hover:text-notaria-dark transition-colors">
                          {cargo.year}
                        </span>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-lg text-notaria-dark mb-1 group-hover:text-notaria-gold transition-colors">{cargo.title}</h4>
                        <p className="text-notaria-dark/70 text-sm">{cargo.entity}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
