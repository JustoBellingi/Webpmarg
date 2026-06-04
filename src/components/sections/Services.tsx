"use client";

import { motion } from "framer-motion";
import {
  Layout,
  ShoppingBag,
  Search,
  Smartphone,
  Zap,
  Headphones,
} from "lucide-react";
import { SERVICES } from "@/config/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  ShoppingBag,
  Search,
  Smartphone,
  Zap,
  HeadphonesIcon: Headphones,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="section-padding relative"
      aria-labelledby="services-heading"
    >
      {/* Section glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 uppercase tracking-widest">
            Lo que hacemos
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Servicios diseñados para{" "}
            <span className="gradient-text">tu negocio</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones web completas que llevan tu comercio al siguiente nivel.
            Desde un sitio vitrina hasta una tienda online lista para vender.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Layout;
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className="group relative glass gradient-border rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08), transparent 60%)" }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:border-blue-400/40 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
