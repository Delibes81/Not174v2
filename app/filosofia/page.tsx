"use client";

import { motion } from "framer-motion";
import { Handshake, HeartHandshake, FileCheck, Scale, MessagesSquare, Lightbulb } from "lucide-react";

export default function Filosofia() {
  const pilares = [
    {
      icon: HeartHandshake,
      title: "Trato Humano y Directo",
      desc: "Comprendemos que detrás de cada trámite hay personas, familias y sueños. Nos tomamos el tiempo para escuchar su historia, entender sus preocupaciones y ofrecer un trato cálido y personalizado."
    },
    {
      icon: FileCheck,
      title: "Rigor Técnico Absoluto",
      desc: "La empatía no está reñida con la excelencia. Nuestro equipo cuenta con los más altos niveles de actualización jurídica para garantizar que cada instrumento notarial sea inexpugnable."
    },
    {
      icon: MessagesSquare,
      title: "Diálogo y Mediación",
      desc: "Creemos firmemente en el poder del diálogo para resolver conflictos. Prevenimos litigios desgastantes y costosos estructurando acuerdos mutuamente beneficiosos."
    },
    {
      icon: Scale,
      title: "Imparcialidad y Ética",
      desc: "Como garantes de la fe pública, actuamos con absoluta neutralidad, protegiendo equitativamente los intereses de todas las partes involucradas en un acto jurídico."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-tertiary/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-white/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-tertiary font-semibold tracking-widest uppercase text-sm mb-4 block">Nuestra Esencia</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary font-bold mb-8">
            Más Allá de los <span className="text-tertiary italic">Modelos</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary/70 font-light max-w-3xl mx-auto leading-relaxed">
            El servicio notarial bien prestado va mucho más allá del simple llenado de formatos preestablecidos. Es un acto de profunda responsabilidad social.
          </p>
        </motion.div>

        {/* The Core Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-tertiary via-yellow-500 to-tertiary rounded-3xl opacity-10 blur-xl"></div>
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-tertiary/20 relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-12 h-12 text-tertiary" />
            </div>
            <div>
              <blockquote className="font-serif text-2xl md:text-3xl text-primary italic leading-relaxed">
                "La verdadera esencia de nuestra labor es escuchar a las partes, interpretar su voluntad y plasmarla con rigurosidad técnica. Es un acto de empatía y madurez humana que ninguna inteligencia artificial o sistema automatizado puede reemplazar."
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Pilares de la Notaría 174</h2>
            <div className="w-16 h-1 bg-tertiary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pilares.map((pilar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-tertiary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0 group-hover:bg-tertiary group-hover:text-white transition-colors duration-300">
                    <pilar.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-primary mb-3">{pilar.title}</h3>
                    <p className="text-primary/70 leading-relaxed">{pilar.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg md:prose-xl prose-stone mx-auto text-primary/80 text-center bg-tertiary/5 p-10 rounded-3xl border border-tertiary/10"
        >
          <Handshake className="w-12 h-12 text-tertiary mx-auto mb-6 opacity-50" />
          <p className="mb-6">
            En la <strong>Notaría 174</strong>, entendemos que cada persona, familia o empresa que acude a nosotros trae consigo una historia única, una necesidad particular y, a menudo, la solución a un conflicto o la realización de un sueño patrimonial.
          </p>
          <p>
            Esta filosofía es la piedra angular sobre la cual el Licenciado Víctor Rafael Aguilar Molina ha construido su práctica notarial durante más de 30 años, garantizando que cada instrumento público sea el reflejo fiel y legalmente sólido de la voluntad de las partes.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

