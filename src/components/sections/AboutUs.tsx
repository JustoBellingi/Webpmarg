"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Orientados a resultados",
    description:
      "Cada proyecto lo encaramos con un objetivo claro: que tu negocio crezca. No hacemos webs bonitas que no convierten.",
  },
  {
    icon: Code2,
    title: "Tecnología de punta",
    description:
      "Usamos las herramientas más modernas del mercado para garantizar sitios rápidos, seguros y fáciles de escalar.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones a medida",
    description:
      "Escuchamos cada negocio antes de escribir una línea de código. No hay dos clientes iguales y no hay dos soluciones iguales.",
  },
  {
    icon: Users,
    title: "Acompañamiento real",
    description:
      "No desaparecemos después de entregar. Estamos disponibles para soporte, consultas y mejoras cuando las necesitás.",
  },
];

export default function AboutUs() {
  return (
    <section
      id="quienes-somos"
      className="section-padding relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Divider top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 70%)", filter: "blur(60px)" }}
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
            Quiénes somos
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Un equipo con experiencia{" "}
            <span className="gradient-text">y propósito</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Somos un equipo de profesionales apasionados por la tecnología,desarrollamos soluciones digitales para negocios de todos los tamaños.
          </p>
        </motion.div>

        {/* Main content: text block + stats */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              En <span className="text-white font-semibold">WEBPMARG</span> nacimos con una
              convicción simple: <span className="text-blue-300">todo negocio merece tener
              una presencia digital profesional</span>, sin importar su tamaño ni su
              presupuesto.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Creemos que no existe una
              solución única: cada cliente tiene necesidades distintas y merece una respuesta a
              su medida.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Combinamos diseño cuidado, desarrollo sólido y una comunicación directa para
              entregar productos que realmente funcionan. Nuestro trabajo no termina cuando
              lanzamos tu web — termina cuando vos estás 100% conforme y tu negocio está
              creciendo online.
            </p>

          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="glass-strong gradient-border rounded-3xl p-8 relative overflow-hidden">
              {/* Glow inside card */}
              <div
                className="absolute -top-10 -right-10 w-52 h-52 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)" }}
                aria-hidden="true"
              />

              {/* Icon grid */}
              <div className="grid grid-cols-3 gap-4 mb-8" aria-hidden="true">
                {[
                  { bg: "from-blue-600/30", label: "Web" },
                  { bg: "from-violet-600/30", label: "SEO" },
                  { bg: "from-emerald-600/30", label: "Shop" },
                  { bg: "from-orange-600/30", label: "UX" },
                  { bg: "from-pink-600/30", label: "Apps" },
                  { bg: "from-cyan-600/30", label: "Tech" },
                ].map(({ bg, label }) => (
                  <div
                    key={label}
                    className={`h-16 rounded-2xl bg-gradient-to-br ${bg} to-transparent border border-white/5 flex items-center justify-center`}
                  >
                    <span className="text-xs text-white/50 font-medium tracking-wide">{label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">W</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">WEBPMARG</div>
                    <div className="text-xs text-slate-500">Soluciones tecnológicas para tu negocio</div>
                  </div>
                </div>
                <div className="h-px bg-white/5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  Diseño · Desarrollo · SEO · E-commerce · Soporte
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass gradient-border rounded-2xl p-5 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:border-blue-400/40 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
