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
          ? "bg-secondary text-background border-tertiary shadow-2xl shadow-tertiary/20" 
          : "bg-white text-primary border-background/10 shadow-lg hover:shadow-xl hover:border-tertiary/50"
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center mb-6",
        highlighted ? "bg-tertiary/20 text-tertiary" : "bg-background text-tertiary"
      )}>
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className={cn(
        "font-serif text-2xl font-bold mb-4",
        highlighted ? "text-tertiary" : "text-primary"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "leading-relaxed flex-grow",
        highlighted ? "text-background/90" : "text-primary/70"
      )}>
        {description}
      </p>

      {highlighted && (
        <div className="mt-8 pt-6 border-t border-tertiary/30">
          <span className="text-sm font-semibold tracking-wider text-tertiary uppercase">
            Servicio Especializado
          </span>
        </div>
      )}
    </motion.div>
  );
}

