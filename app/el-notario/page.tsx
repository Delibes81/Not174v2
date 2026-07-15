"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, GraduationCap, Scale, ChevronRight } from "lucide-react";

export default function ElNotario() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-notaria-light pt-24" ref={containerRef}>
      {/* Header Profile with Parallax */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-notaria-dark">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-10 pointer-events-none"></div>

        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/Notario 174.webp" 
            alt="Víctor Rafael Aguilar Molina" 
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-notaria-dark via-notaria-dark/40 to-transparent z-10" />
        </motion.div>
        
        <div className="relative z-20 h-full flex items-end pb-20">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-notaria-gold/20 border border-notaria-gold/40 rounded-full backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-notaria-gold"></span>
                <span className="text-notaria-gold text-xs font-semibold uppercase tracking-widest">Titular de la Notaría 174</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
                Víctor Rafael <br className="hidden md:block"/> Aguilar Molina
              </h1>
              <p className="text-notaria-light/80 text-xl md:text-2xl font-light tracking-wide max-w-2xl">
                Dedicación, rigor académico y vocación de servicio al frente del notariado capitalino.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Blob */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-notaria-gold/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-notaria-dark mb-6">
                  Una vida dedicada a la certeza jurídica
                </h2>
                <div className="w-16 h-1 bg-notaria-gold mb-8"></div>
                <p className="text-lg text-notaria-dark/70 leading-relaxed mb-6">
                  Desde su nombramiento en 1992, el Lic. Víctor Rafael Aguilar Molina ha construido una trayectoria cimentada en la ética, el profesionalismo y, sobre todo, en el trato directo y humano con las personas.
                </p>
                <p className="text-lg text-notaria-dark/70 leading-relaxed">
                  Su convicción es clara: el Notario no es solo un dador de fe, sino un asesor imparcial y un mediador por naturaleza que busca siempre la armonía legal de sus clientes.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Timeline / Details */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-notaria-dark/5 hover:border-notaria-gold/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-notaria-gold/10 flex items-center justify-center text-notaria-gold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-notaria-dark font-semibold">Liderazgo Institucional</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <ChevronRight className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-notaria-dark text-lg">Presidente del Colegio de Notarios de la CDMX</p>
                      <p className="text-notaria-dark/60 text-sm mb-2">Periodo 2026 - 2027</p>
                      <p className="text-notaria-dark/80">Elegido por sus pares para dirigir y representar al notariado capitalino, promoviendo la modernización de la función y estrechando los lazos con la sociedad.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ChevronRight className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-notaria-dark text-lg">Titular de la Notaría 174</p>
                      <p className="text-notaria-dark/60 text-sm mb-2">Desde 1992</p>
                      <p className="text-notaria-dark/80">Más de tres décadas al frente de su oficina, consolidando un equipo de trabajo altamente capacitado y comprometido con la excelencia.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-notaria-dark/5 hover:border-notaria-gold/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-notaria-gold/10 flex items-center justify-center text-notaria-gold">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-notaria-dark font-semibold">Mediación Privada</h3>
                </div>
                <div className="flex gap-4">
                  <ChevronRight className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-notaria-dark text-lg">Mediador Privado Certificado #54</p>
                    <p className="text-notaria-dark/60 text-sm mb-2">Certificado desde 2012</p>
                    <p className="text-notaria-dark/80 mb-4">Pionero en la implementación de la justicia alternativa en la Ciudad de México. Facilita el diálogo entre las partes para resolver conflictos en materia civil, mercantil y familiar sin necesidad de acudir a tribunales.</p>
                    <div className="bg-notaria-light p-4 rounded-xl border border-notaria-dark/10">
                      <p className="text-sm text-notaria-dark italic">"Un buen arreglo, estructurado legalmente, es siempre superior al litigio más brillante."</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-notaria-dark/5 hover:border-notaria-gold/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-notaria-gold/10 flex items-center justify-center text-notaria-gold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-notaria-dark font-semibold">Formación y Docencia</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Award className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-notaria-dark text-lg">Licenciatura en Derecho</p>
                      <p className="text-notaria-dark/80">Escuela Libre de Derecho, cuna de destacados juristas en México.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Award className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-notaria-dark text-lg">Maestría en Derecho Económico</p>
                      <p className="text-notaria-dark/80">Universidad Autónoma Metropolitana (UAM).</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Award className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-notaria-dark text-lg">Catedrático e Investigador</p>
                      <p className="text-notaria-dark/80">Profesor en la Facultad de Derecho de la UNAM y en la Escuela Libre de Derecho, transmitiendo el valor de la fe pública a nuevas generaciones.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
