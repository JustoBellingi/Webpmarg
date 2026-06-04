"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_ITEMS, WHATSAPP_URL } from "@/config/site";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding relative"
      aria-labelledby="portfolio-heading"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
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
          <span className="inline-block px-3 py-1 text-xs font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full mb-4 uppercase tracking-widest">
            Portfolio
          </span>
          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Proyectos que{" "}
            <span className="gradient-text">generan resultados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Una muestra de los sitios que construimos para comercios reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass gradient-border rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              {/* Mockup thumbnail */}
              <div
                className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
                aria-label={`Mockup de ${item.title}`}
              >
                {/* Fake browser chrome */}
                <div className="absolute inset-3 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-black/20 border-b border-white/10">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="flex-1 mx-3 h-3.5 rounded bg-white/10" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-3 w-1/2 rounded bg-white/20" />
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-4/5 rounded bg-white/10" />
                    <div className="mt-3 flex gap-2">
                      <div className="h-6 w-16 rounded-lg bg-white/20" />
                      <div className="h-6 w-16 rounded-lg bg-white/10" />
                    </div>
                  </div>
                </div>
                {/* Emoji as project icon */}
                <span
                  className="absolute bottom-4 right-4 text-3xl opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-300"
                  role="img"
                  aria-label={item.title}
                >
                  {item.emoji}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-white text-base leading-snug">{item.title}</h3>
                  <ExternalLink
                    className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <span className="inline-block px-2 py-0.5 text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full mb-2">
                  {item.category}
                </span>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">
            ¿Querés ver algo similar para tu negocio?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-blue-500/30 hover:border-blue-400/50 text-blue-300 hover:text-blue-200 rounded-xl transition-all duration-300 hover:bg-blue-500/5 text-sm font-medium"
          >
            Hablemos de tu proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
