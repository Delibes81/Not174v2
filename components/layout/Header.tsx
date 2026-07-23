"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/el-notario", label: "El Notario" },
  { href: "/filosofia", label: "Filosofía" },
  { href: "/servicios", label: "Servicios" },
  { href: "/publicaciones", label: "Publicaciones" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDarkBackground = pathname === "/" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glassmorphism py-4 shadow-sm" : "bg-transparent py-6 border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-24 h-24 flex items-center justify-center transition-transform group-hover:scale-105">
             <img src={isDarkBackground ? "/logo-light.png" : "/logo-transparent.png"} alt="Logo Notara 174" className="w-full h-full object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-tertiary relative",
                pathname === link.href ? "text-tertiary" : isDarkBackground ? "text-white/90" : "text-primary dark:text-background"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-tertiary"
                />
              )}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="px-5 py-2 text-sm font-semibold text-white bg-tertiary rounded-full hover:bg-yellow-600 transition-colors shadow-md hover:shadow-lg"
          >
            Agendar Asesoría
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2", isDarkBackground ? "text-white" : "text-primary dark:text-background")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism border-t border-tertiary/20"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    pathname === link.href ? "text-tertiary" : "text-primary dark:text-background"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 text-center font-semibold text-white bg-tertiary rounded-full"
              >
                Agendar Asesoría
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

