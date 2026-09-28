import { Check } from "lucide-react";
import { PLANS, WHATSAPP_NUMBER } from "@/config/site";

function planWhatsAppUrl(planName: string) {
  const message = encodeURIComponent(`Hola! Quiero consultar por el plan ${planName} de WEBPMARG.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function Plans() {
  return (
    <section id="planes" className="section-padding relative overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0 bg-dots" aria-hidden="true" />

      <div className="container-custom relative">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Planes</h2>
          <p className="text-white/60">
            El precio depende de lo que necesites. Consultanos y te pasamos un presupuesto sin cargo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-br from-primary to-indigo-600 shadow-2xl shadow-primary/30"
                  : "bg-white/5 ring-1 ring-white/10"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-6 right-6 sm:top-8 sm:right-8 px-2.5 py-1 rounded-full bg-white text-primary text-xs font-semibold">
                  Más elegido
                </span>
              )}

              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-8 ${plan.highlight ? "text-white/80" : "text-white/60"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-white" : "text-blue-400"}`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={planWhatsAppUrl(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-white/10 hover:bg-white/15"
                }`}
              >
                Consultar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
