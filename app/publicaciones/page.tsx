"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Library, FileText } from "lucide-react";

export default function Publicaciones() {
  const books = [
    {
      title: "Ley del Notariado para la Ciudad de México",
      subtitle: "Comentada y Concordada",
      desc: "Análisis y comentarios sistemáticos sobre el marco legal que rige la función notarial en la capital. Una obra indispensable para el estudio práctico y doctrinal de la materia.",
      year: "2018"
    },
    {
      title: "Reglamento de la Ley del Notariado para la Ciudad de México",
      subtitle: "Estudio Práctico",
      desc: "Estudio detallado de las disposiciones reglamentarias y su aplicación práctica en las notarías, desmenuzando los procedimientos administrativos y de control.",
      year: "2020"
    },
    {
      title: "Notariado del Distrito Federal",
      subtitle: "Historia y Evolución",
      desc: "Obra de referencia histórica y dogmática sobre la evolución e instituciones del notariado local, desde sus orígenes hasta la era contemporánea.",
      year: "2015"
    }
  ];

  return (
    <div className="min-h-screen bg-notaria-light pt-32 pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 left-0 w-[40vw] h-[40vw] bg-notaria-gold/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-notaria-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Aportación Académica</span>
          <h1 className="font-serif text-5xl md:text-6xl text-notaria-dark font-bold mb-6">
            Docencia y Publicaciones
          </h1>
          <div className="w-16 h-1 bg-notaria-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-notaria-dark/70 max-w-3xl mx-auto font-light leading-relaxed">
            El compromiso con la excelencia jurídica de la Notaría 174 se extiende más allá de la práctica notarial diaria, contribuyendo activamente a la formación de nuevas generaciones y al desarrollo doctrinal del Derecho Notarial en México.
          </p>
        </motion.div>

        {/* Docencia */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-notaria-gold/10 relative overflow-hidden group"
        >
          {/* Subtle hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-notaria-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex items-center gap-5 mb-12 border-b border-notaria-gold/20 pb-8 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-notaria-dark to-notaria-dark/80 flex items-center justify-center text-notaria-gold shadow-lg">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-notaria-dark">Trayectoria Docente</h2>
          </div>
          
          <div className="space-y-12 relative z-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6 group/item">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-notaria-gold"></div>
                  <h3 className="font-bold text-xl text-notaria-dark">UNAM</h3>
                </div>
                <p className="text-notaria-gold font-medium text-sm ml-5">Facultad de Derecho</p>
              </div>
              <div className="md:w-2/3 bg-notaria-light p-6 rounded-2xl border border-transparent group-hover/item:border-notaria-gold/20 group-hover/item:bg-white transition-all duration-300">
                <p className="text-notaria-dark/80 leading-relaxed text-lg">
                  Profesor titular destacado, impartiendo cátedras especializadas en Derecho Civil y Derecho Notarial. Su labor se centra en formar con rigor analítico a futuros abogados, transmitiendo no solo el conocimiento de la ley, sino la ética y responsabilidad inherentes a la profesión jurídica.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6 group/item">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-notaria-gold"></div>
                  <h3 className="font-bold text-xl text-notaria-dark">Escuela Libre de Derecho</h3>
                </div>
                <p className="text-notaria-gold font-medium text-sm ml-5">Ciudad de México</p>
              </div>
              <div className="md:w-2/3 bg-notaria-light p-6 rounded-2xl border border-transparent group-hover/item:border-notaria-gold/20 group-hover/item:bg-white transition-all duration-300">
                <p className="text-notaria-dark/80 leading-relaxed text-lg">
                  Catedrático en su alma máter, institución reconocida por su exigencia y excelencia académica. Allí fomenta los más altos estándares éticos, impartiendo materias relacionadas con las obligaciones civiles y los contratos, pilares fundamentales del derecho notarial.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Publicaciones */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-5 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-notaria-gold to-yellow-600 flex items-center justify-center text-white shadow-lg shadow-notaria-gold/30">
              <Library className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-notaria-dark">Obras Destacadas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((pub, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-notaria-dark/10 shadow-lg hover:shadow-2xl hover:border-notaria-gold/50 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-full bg-notaria-light flex items-center justify-center mb-6 text-notaria-gold group-hover:bg-notaria-gold group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <span className="text-xs font-bold text-notaria-gold tracking-widest uppercase mb-2 block">{pub.year}</span>
                  <h3 className="font-serif text-2xl font-bold text-notaria-dark mb-2 leading-tight">{pub.title}</h3>
                  <p className="text-sm text-notaria-dark/50 italic mb-4">{pub.subtitle}</p>
                  <p className="text-notaria-dark/80 leading-relaxed">{pub.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Articulos y Conferencias */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-notaria-dark text-white rounded-3xl p-8 md:p-10 shadow-xl border border-notaria-gold/30 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-notaria-gold/20 flex items-center justify-center text-notaria-gold flex-shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Artículos y Conferencias</h3>
              <p className="text-notaria-light/80 text-lg">
                Participación constante en foros, congresos nacionales e internacionales y publicación regular en la Revista del Colegio de Notarios.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
