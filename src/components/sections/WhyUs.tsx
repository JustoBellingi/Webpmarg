"use client";

import { motion } from "framer-motion";
import { DollarSign, Rocket, Sparkles, Users } from "lucide-react";
import { WHY_US } from "@/config/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Rocket,
  Sparkles,
  Users,
};

const gradients = [
  "from-blue-500 to-blue-600",
  "from-violet-500 to-violet-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
];

const bgGlows = [
  "from-blue-500/10",
  "from-violet-500/10",
  "from-emerald-500/10",
  "from-orange-500/10",
];

export default function WhyUs() {
  return (
    <section
      id="por-que"
      className="section-padding relative overflow-hidden"
      aria-labelledby="whyus-heading"
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)", filter: "blur(60px)" }}
        aria-hidden="true"
      />

      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full mb-4 uppercase tracking-widest">
              Por qué elegirnos
            </span>
            <h2
              id="whyus-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              La diferencia está{" "}
              <span className="gradient-text">en los detalles</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              No somos una agencia grande e impersonal. Somos un equipo enfocado
              en ayudar a comercios como el tuyo a crecer online, con atención
              directa, precios justos y resultados concretos.
            </p>

          </motion.div>

          {/* Right: benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Sparkles;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group glass gradient-border rounded-2xl p-5 bg-gradient-to-br ${bgGlows[i]} to-transparent hover:scale-[1.02] transition-all duration-300`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
