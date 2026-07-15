"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Library, FileText, ChevronRight } from "lucide-react";

export default function Publicaciones() {
  const books = [
    {
      title: "Ley del Notariado para la Ciudad de México y su Reglamento",
      subtitle: "Edición 2023",
      year: "2023"
    },
    {
      title: "Ley del Notariado para el Distrito Federal",
      subtitle: "3° Edición Actualizada",
      year: "2013"
    },
    {
      title: "Notariado del Distrito Federal",
      subtitle: "2° Edición Actualizada (1° Edición 2006)",
      year: "2010"
    },
    {
      title: "Venta Judicial",
      subtitle: "Colección de Temas Jurídicos en Breviarios # 40",
      year: "2009"
    },
    {
      title: "La Función Notarial en el Nuevo Derecho Agrario",
      subtitle: "2° Edición Actualizada. Temas Jurídicos en Breviarios #1",
      year: "2009"
    },
    {
      title: "Ley del Notariado del DF Correlacionada",
      subtitle: "2º Edición Actualizada",
      year: "2003"
    },
    {
      title: "Ley de Inversión Extranjera y su Reglamento",
      subtitle: "2º Edición Actualizada",
      year: "2002"
    },
    {
      title: "Leyes Financieras Sociales (2 Volúmenes)",
      subtitle: "Primera Edición",
      year: "2002"
    },
    {
      title: "Nacionalidad y Población",
      subtitle: "Primera Edición",
      year: "2002"
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
            El compromiso con la excelencia jurídica de la Notaría 174 se extiende más allá de la práctica notarial diaria, contribuyendo activamente a la formación de nuevas generaciones y al desarrollo doctrinal del Derecho en México.
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
          
          <div className="space-y-8 relative z-10">
            
            <div className="flex flex-col md:flex-row md:items-start gap-6 group/item">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-notaria-gold"></div>
                  <h3 className="font-bold text-xl text-notaria-dark">UNAM</h3>
                </div>
                <p className="text-notaria-gold font-medium text-sm ml-5">Facultad de Derecho</p>
              </div>
              <div className="md:w-2/3 bg-notaria-light p-6 rounded-2xl border border-transparent group-hover/item:border-notaria-gold/20 group-hover/item:bg-white transition-all duration-300">
                <p className="text-notaria-dark/80 leading-relaxed font-semibold mb-2">Derecho Notarial</p>
                <p className="text-notaria-dark/70 text-sm">Especialidad en Derecho Notarial y Registral (2009-2014).</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6 group/item">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-notaria-gold"></div>
                  <h3 className="font-bold text-xl text-notaria-dark">Escuela Libre de Derecho</h3>
                </div>
              </div>
              <div className="md:w-2/3 bg-notaria-light p-6 rounded-2xl border border-transparent group-hover/item:border-notaria-gold/20 group-hover/item:bg-white transition-all duration-300">
                <p className="text-notaria-dark/80 leading-relaxed font-semibold mb-2">Derecho Agrario</p>
                <p className="text-notaria-dark/70 text-sm">Diplomado en Derecho Inmobiliario (2017-2018).</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6 group/item">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-notaria-gold"></div>
                  <h3 className="font-bold text-xl text-notaria-dark">Otras Instituciones</h3>
                </div>
              </div>
              <div className="md:w-2/3 bg-notaria-light p-6 rounded-2xl border border-transparent group-hover/item:border-notaria-gold/20 group-hover/item:bg-white transition-all duration-300">
                <ul className="space-y-4">
                  <li>
                    <p className="text-notaria-dark/80 font-semibold">Mediación Privada en Materias Civil, Mercantil y Familiar</p>
                    <p className="text-notaria-dark/70 text-sm">Instituto para la Paz, A.C. (2015-2016) / Colegio de Notarios de Puebla (2016).</p>
                  </li>
                  <li>
                    <p className="text-notaria-dark/80 font-semibold">Derecho Inmobiliario y Societario</p>
                    <p className="text-notaria-dark/70 text-sm">Universidad del Valle de México - UPM (2002) y Universidad Chapultepec (1995-1997).</p>
                  </li>
                  <li>
                    <p className="text-notaria-dark/80 font-semibold">Derecho Notarial y Registral</p>
                    <p className="text-notaria-dark/70 text-sm">UDLA (2000-2004) y Escuela Libre de Derecho de Puebla (2000-2003).</p>
                  </li>
                </ul>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-notaria-dark">Obras Publicadas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((pub, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-notaria-dark/10 shadow-sm hover:shadow-xl hover:border-notaria-gold/50 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-10 h-10 rounded-full bg-notaria-light flex items-center justify-center mb-4 text-notaria-gold group-hover:bg-notaria-gold group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="text-xs font-bold text-notaria-gold tracking-widest uppercase mb-2 block">{pub.year}</span>
                  <h3 className="font-serif text-lg font-bold text-notaria-dark mb-1 leading-tight">{pub.title}</h3>
                  <p className="text-sm text-notaria-dark/60 italic">{pub.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Articulos */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-notaria-dark/5"
        >
          <div className="flex items-center gap-5 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-notaria-gold/10 flex items-center justify-center text-notaria-gold">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-notaria-dark">Artículos Destacados</h2>
          </div>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <ChevronRight className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-notaria-dark text-lg">La fe pública del mediador privado, en caso de la Ciudad de México</p>
                <p className="text-notaria-dark/60 text-sm">Homenaje al Dr. Othón Pérez Fernández del Castillo. Facultad de Derecho UNAM (2017).</p>
              </div>
            </li>
            <li className="flex gap-4">
              <ChevronRight className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-notaria-dark text-lg">Artículos en la Revista Mexicana de Derecho</p>
                <p className="text-notaria-dark/60 text-sm">Colegio de Notarios del DF. Incluye temas como: "La Enajenación de la Empresa" (2009), "La Enajenación de Derechos Parcelarios" (2008), "Empresa" (2007) y "La Sociedad Cooperativa Moderna" (2001).</p>
              </div>
            </li>
            <li className="flex gap-4">
              <ChevronRight className="w-5 h-5 text-notaria-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-notaria-dark text-lg">Artículos en la Revista de Derecho Notarial</p>
                <p className="text-notaria-dark/60 text-sm">Asociación Nacional del Notariado Mexicano. "Eficacia judicial y extrajudicial del documento notarial" (2002) y "Seguridad jurídica notarial frente a la titulación administrativa" (2000).</p>
              </div>
            </li>
          </ul>
        </motion.section>

      </div>
    </div>
  );
}
