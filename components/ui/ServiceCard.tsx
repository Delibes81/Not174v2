"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlighted?: boolean;
}

export default function ServiceCard({ title, description, icon: Icon, highlighted = false }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "p-8 rounded-2xl flex flex-col h-full border transition-all duration-300",
        highlighted 
          ? "bg-notaria-dark text-notaria-light border-notaria-gold shadow-2xl shadow-notaria-gold/20" 
          : "bg-white text-notaria-dark border-notaria-light/10 shadow-lg hover:shadow-xl hover:border-notaria-gold/50"
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center mb-6",
        highlighted ? "bg-notaria-gold/20 text-notaria-gold" : "bg-notaria-light text-notaria-gold"
      )}>
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className={cn(
        "font-serif text-2xl font-bold mb-4",
        highlighted ? "text-notaria-gold" : "text-notaria-dark"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "leading-relaxed flex-grow",
        highlighted ? "text-notaria-light/90" : "text-notaria-dark/70"
      )}>
        {description}
      </p>

      {highlighted && (
        <div className="mt-8 pt-6 border-t border-notaria-gold/30">
          <span className="text-sm font-semibold tracking-wider text-notaria-gold uppercase">
            Servicio Especializado
          </span>
        </div>
      )}
    </motion.div>
  );
}
