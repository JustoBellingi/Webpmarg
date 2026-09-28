import { Check } from "lucide-react";
import { PLANS, WHATSAPP_NUMBER } from "@/config/site";

function planWhatsAppUrl(planName: string) {
  const message = encodeURIComponent(`Hola! Quiero consultar por el plan ${planName} de WEBPMARG.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function Plans() {
  return (
    <section id="planes" className="section-padding">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Planes</h2>
          <p className="text-muted-foreground">
            El precio depende de lo que necesites. Consultanos y te pasamos un presupuesto sin cargo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight ? "bg-secondary text-secondary-foreground" : "border bg-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-7 right-7 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Más elegido
                </span>
              )}

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-blue-300" : "text-primary"}`}
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
                className={`mt-auto text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border hover:bg-muted"
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
