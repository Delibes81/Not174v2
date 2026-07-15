import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-notaria-dark text-notaria-light py-16">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full border border-notaria-gold overflow-hidden bg-white">
              <img src="/logo.jpeg" alt="Logo Notaría 174" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold">Notaría 174</span>
              <span className="text-xs tracking-widest text-notaria-gold uppercase">Ciudad de México</span>
            </div>
          </div>
          <p className="text-sm text-notaria-light/80 mt-4 max-w-xs">
            Seguridad jurídica con trato humano. Más de tres décadas de experiencia y confianza a su servicio.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-serif text-xl font-semibold mb-2">Contacto</h3>
          <div className="flex items-start gap-3 text-sm text-notaria-light/80">
            <MapPin className="w-5 h-5 text-notaria-gold flex-shrink-0" />
            <p>Guty Cárdenas #48, Col. Guadalupe Inn,<br />Álvaro Obregón, C.P. 01020,<br />Ciudad de México.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-notaria-light/80">
            <Phone className="w-5 h-5 text-notaria-gold flex-shrink-0" />
            <a href="tel:5556640064" className="hover:text-notaria-gold transition-colors">5556640064</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-notaria-light/80">
            <Mail className="w-5 h-5 text-notaria-gold flex-shrink-0" />
            <a href="mailto:notario@notaria174cdmx.com.mx" className="hover:text-notaria-gold transition-colors">notario@notaria174cdmx.com.mx</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-serif text-xl font-semibold mb-2">Enlaces Rápidos</h3>
          <nav className="flex flex-col space-y-2 text-sm text-notaria-light/80">
            <Link href="/" className="hover:text-notaria-gold transition-colors">Inicio</Link>
            <Link href="/el-notario" className="hover:text-notaria-gold transition-colors">El Notario</Link>
            <Link href="/filosofia" className="hover:text-notaria-gold transition-colors">Filosofía</Link>
            <Link href="/servicios" className="hover:text-notaria-gold transition-colors">Servicios Notariales</Link>
            <Link href="/publicaciones" className="hover:text-notaria-gold transition-colors">Publicaciones</Link>
            <Link href="/contacto" className="hover:text-notaria-gold transition-colors">Contacto</Link>
          </nav>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-notaria-light/10 text-center text-xs text-notaria-light/50">
        <p>&copy; {new Date().getFullYear()} Notaría 174 de la Ciudad de México. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
