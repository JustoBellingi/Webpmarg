"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero - Bienvenida"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium glass border border-blue-500/20 text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              Diseño web para comercios argentinos
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Tu comercio merece{" "}
            <span className="gradient-text animate-gradient-x block sm:inline">
              estar online
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            Creamos páginas web profesionales para negocios como el tuyo.
            Diseño moderno, precios accesibles y entrega en menos de 2 semanas.
            <span className="text-slate-300"> Sin experiencia técnica requerida.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 text-base"
              aria-label="Empezar ahora - Contactar por WhatsApp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Empezar ahora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#servicios");
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 px-7 py-4 glass border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium rounded-xl transition-all duration-300 text-base"
            >
              Ver servicios
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
