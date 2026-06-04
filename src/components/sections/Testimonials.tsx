"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/config/site";

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="section-padding relative"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)" }}
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
            Testimonios
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Lo que dicen{" "}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Comercios reales que ya están creciendo online con nuestra ayuda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group glass gradient-border rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 text-blue-500/40 mb-4 flex-shrink-0"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} estrellas`}>
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm shadow-lg shadow-blue-600/20">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.business}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
