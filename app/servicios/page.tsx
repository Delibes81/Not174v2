"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import { 
  Home, Scroll, Building2, Scale, Users2, FileText, Briefcase,
  Key, Landmark, UserPlus, HeartHandshake, Gavel, Stamp
} from "lucide-react";

export default function Servicios() {
  const categories = [
    {
      title: "Inmobiliario",
      desc: "Protección y transmisión segura de su patrimonio.",
      services: [
        {
          title: "Compraventas",
          description: "Asesoría integral y formalización de traslados de dominio de bienes inmuebles, garantizando seguridad jurídica para ambas partes.",
          icon: Home,
        },
        {
          title: "Fideicomisos",
          description: "Constitución y extinción de fideicomisos traslativos de dominio, de administración y garantía.",
          icon: Landmark,
        },
        {
          title: "Donaciones y Permutas",
          description: "Transmisión gratuita o intercambio de bienes inmuebles con el respaldo de fe pública.",
          icon: HeartHandshake,
        },
        {
          title: "Régimen en Condominio",
          description: "Constitución, modificación y extinción de regímenes de propiedad en condominio.",
          icon: Building2,
        }
      ]
    },
    {
      title: "Corporativo y Mercantil",
      desc: "Certeza jurídica para el desarrollo de su empresa.",
      services: [
        {
          title: "Constitución de Sociedades",
          description: "Creación de S.A., S. de R.L., S.A.P.I., Asociaciones y Fundaciones (A.C. e I.A.P.).",
          icon: Building2,
        },
        {
          title: "Actas de Asamblea",
          description: "Protocolización de asambleas ordinarias y extraordinarias, consejos de administración y otorgamiento de poderes.",
          icon: Briefcase,
        },
        {
          title: "Fusiones y Escisiones",
          description: "Formalización de reestructuraciones corporativas, fusiones, escisiones, disolución y liquidación de empresas.",
          icon: Users2,
        }
      ]
    },
    {
      title: "Familiar y Civil",
      desc: "Tranquilidad y orden para usted y los suyos.",
      services: [
        {
          title: "Testamentos",
          description: "Redacción cuidadosa de su última voluntad (Testamento Público Abierto), asegurando la transmisión pacífica de su patrimonio.",
          icon: Scroll,
        },
        {
          title: "Sucesiones",
          description: "Tramitación de sucesiones testamentarias e intestamentarias en sede notarial, de forma ágil y transparente.",
          icon: Key,
        },
        {
          title: "Capitulaciones",
          description: "Convenios sobre el régimen patrimonial del matrimonio y modificaciones al mismo.",
          icon: UserPlus,
        }
      ]
    },
    {
      title: "Fe Pública y Varios",
      desc: "Respaldo notarial en actos y hechos jurídicos.",
      services: [
        {
          title: "Poderes",
          description: "Otorgamiento y revocación de poderes generales y especiales (pleitos y cobranzas, administración, dominio).",
          icon: FileText,
        },
        {
          title: "Fe de Hechos",
          description: "Constatación objetiva de hechos materiales por parte del Notario para hacer constar su existencia.",
          icon: Stamp,
        },
        {
          title: "Cotejos y Certificaciones",
          description: "Cotejo de documentos originales y expedición de copias certificadas con validez plena.",
          icon: FileText,
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-notaria-light pt-32 pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-notaria-gold/30 to-transparent"></div>
      <div className="absolute top-20 left-10 w-[30vw] h-[30vw] bg-notaria-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <span className="text-notaria-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Catálogo de Servicios</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-notaria-dark font-bold mb-6"
          >
            Servicios Notariales
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-1 bg-notaria-gold mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-notaria-dark/70 font-light"
          >
            Brindamos asesoría jurídica imparcial y fe pública en una amplia gama de actos y hechos jurídicos en la Ciudad de México, con la máxima atención al detalle.
          </motion.p>
        </div>

        {/* Featured Service: Mediación Privada */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24 relative z-10"
        >
          <ServiceCard
            title="Mediación Privada"
            description="Como Mediador Privado Certificado #54, el Titular ofrece un espacio neutral y confidencial para la resolución alternativa de controversias en materia civil, mercantil y familiar. La mediación previene litigios largos y costosos, promoviendo acuerdos mutuamente beneficiosos estructurados mediante convenios con categoría de cosa juzgada."
            icon={Scale}
            highlighted={true}
          />
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-24 relative z-10">
          {categories.map((category, catIdx) => (
            <div key={catIdx}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-notaria-dark flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-notaria-gold/20 flex items-center justify-center text-sm text-notaria-gold font-sans font-bold">
                    {catIdx + 1}
                  </span>
                  {category.title}
                </h2>
                <p className="text-notaria-dark/60 text-lg mt-2 ml-12">{category.desc}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="h-full"
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
