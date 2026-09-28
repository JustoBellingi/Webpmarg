import { LayoutTemplate, LifeBuoy, Search, ShoppingBag } from "lucide-react";
import { SERVICES } from "@/config/site";

const ICONS = {
  layout: LayoutTemplate,
  shop: ShoppingBag,
  search: Search,
  support: LifeBuoy,
};

export default function Services() {
  return (
    <section id="servicios" className="section-padding border-t">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Qué hacemos</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <article key={service.title} className="rounded-xl border bg-card p-6">
                <div className="w-10 h-10 mb-5 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
