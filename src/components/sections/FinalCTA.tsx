"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/15 to-blue-900/20" />
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" aria-hidden="true" />

          {/* Glow orbs */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)", filter: "blur(50px)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)", filter: "blur(50px)" }}
            aria-hidden="true"
          />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-blue-500/20" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 uppercase tracking-widest"
            >
              ¿Listo para empezar?
            </motion.span>

            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Llevemos tu negocio{" "}
              <span className="gradient-text">al siguiente nivel</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Escribinos hoy por WhatsApp. Te respondemos en minutos y te
              contamos exactamente cómo podemos ayudarte a crecer online.
              <span className="text-slate-300"> Sin costo y sin compromiso.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 text-base"
                aria-label="Hablar por WhatsApp ahora"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Hablar por WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-6 mt-10 text-sm text-slate-500 flex-wrap"
            >
              {["Respuesta en minutos", "Sin compromiso", "Presupuesto gratis"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-500" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
