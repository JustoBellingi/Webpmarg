"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Star } from "lucide-react";
import { PLANS, WHATSAPP_URL } from "@/config/site";

export default function Plans() {
  return (
    <section
      id="planes"
      className="section-padding relative overflow-hidden"
      aria-labelledby="plans-heading"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
        aria-hidden="true"
      />

      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 uppercase tracking-widest">
            Planes
          </span>
          <h2
            id="plans-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Elegí el plan que{" "}
            <span className="gradient-text">mejor te quede</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Consultanos por el precio exacto. Lo adaptamos a tu negocio y tus necesidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-blue-600/20 via-violet-600/10 to-transparent border border-blue-500/40 shadow-xl shadow-blue-600/10 scale-[1.02]"
                  : "glass gradient-border hover:bg-white/[0.05]"
              }`}
              aria-label={`Plan ${plan.name}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-full shadow-lg shadow-blue-600/30">
                    <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                    Más elegido
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8" role="list" aria-label={`Características del plan ${plan.name}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.highlight
                          ? "bg-gradient-to-br from-blue-500 to-violet-500"
                          : "bg-blue-500/20 border border-blue-500/30"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${plan.highlight ? "text-white" : "text-blue-400"}`}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-sm text-slate-300 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-[1.02]"
                    : "glass border border-white/10 hover:border-blue-500/30 text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                aria-label={`Consultar por el plan ${plan.name} en WhatsApp`}
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          * Todos los planes incluyen dominio .com y hosting por el primer año.
          Precios adaptables a cada proyecto.
        </motion.p>
      </div>
    </section>
  );
}
