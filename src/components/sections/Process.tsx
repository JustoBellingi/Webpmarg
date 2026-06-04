"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/config/site";

export default function Process() {
  return (
    <section
      id="proceso"
      className="section-padding relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Top divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)" }}
        aria-hidden="true"
      />

      {/* Background radial */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 70%)", filter: "blur(50px)" }}
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
            Cómo trabajamos
          </span>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            De la idea a tu web{" "}
            <span className="gradient-text">en 5 pasos</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Un proceso claro, sin sorpresas. Sabés exactamente qué pasa en cada etapa.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-0.5"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.4) 10%, rgba(139,92,246,0.4) 90%, transparent)" }}
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-10 last:mb-0 md:w-1/2 ${
                i % 2 === 0
                  ? "md:pr-12 md:ml-0"
                  : "md:pl-12 md:ml-auto md:flex-row-reverse"
              }`}
            >
              {/* Number bubble */}
              <div
                className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-600/30 md:absolute md:top-0"
                style={
                  i % 2 === 0
                    ? { right: "-24px" }
                    : { left: "-24px" }
                }
                // on mobile we just use flex, on md it's absolute
              >
                <span className="text-white font-bold text-sm">{step.number}</span>
              </div>

              {/* Card */}
              <div className="glass gradient-border rounded-2xl p-5 flex-1 hover:bg-white/[0.05] transition-colors duration-300 ml-6 md:ml-0">
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
