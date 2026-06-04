"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_NAME, WHATSAPP_URL, SOCIAL_LINKS, NAV_LINKS } from "@/config/site";

const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
  </svg>
);

const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const SocialLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width={4} height={12} x={2} y={9} />
    <circle cx={4} cy={4} r={2} />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      aria-label="Pie de página"
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                WEB<span className="text-blue-400">PMARG</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              Creamos páginas web profesionales para comercios que quieren
              crecer online. Diseño, desarrollo y acompañamiento.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3" aria-label="Redes sociales">
              {[
                { icon: SocialInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram de WEBPMARG" },
                { icon: SocialFacebook, href: SOCIAL_LINKS.facebook, label: "Facebook de WEBPMARG" },
                { icon: SocialLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn de WEBPMARG" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 border border-white/5 transition-all duration-300 hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Navegación
            </h3>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Contacto
            </h3>
            <p className="text-slate-500 text-sm mb-5 leading-relaxed">
              ¿Tenés alguna pregunta? Escribinos directamente por WhatsApp y te
              respondemos a la brevedad.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600/80 to-violet-600/80 hover:from-blue-600 hover:to-violet-600 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20"
              aria-label="Enviar mensaje de WhatsApp a WEBPMARG"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Escribinos al WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600"
        >
          <p>
            &copy; {year} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <p>
            Hecho con{" "}
            <span className="text-red-500/70" aria-label="amor">♥</span>{" "}
            en Argentina
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
