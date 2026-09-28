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
    <section id="servicios" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 sm:mb-12">Qué hacemos</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              // En celular es una fila (ícono al costado) para ocupar menos alto; desde sm, tarjeta
              <article
                key={service.title}
                className="flex gap-4 sm:block rounded-2xl bg-card p-5 sm:p-6 shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/30"
              >
                <div className="w-11 h-11 shrink-0 sm:mb-5 rounded-xl bg-gradient-to-br from-primary to-indigo-500 text-white flex items-center justify-center shadow-md shadow-primary/30">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
