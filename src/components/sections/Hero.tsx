import { Check } from "lucide-react";
import { HIGHLIGHTS, WHATSAPP_URL } from "@/config/site";
import { WhatsAppIcon } from "@/components/brand";

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="inline-block px-3 py-1 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            Diseño web para comercios · La Plata
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance mb-6">
            Tu comercio, online en <span className="text-primary">2 semanas</span>.
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mb-8">
            Páginas web simples, rápidas y a precio justo para negocios chicos y medianos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <WhatsAppIcon />
              Pedí tu presupuesto
            </a>
            <a
              href="#planes"
              className="flex items-center justify-center px-6 py-3.5 rounded-lg border bg-card font-semibold hover:bg-muted transition-colors"
            >
              Ver planes
            </a>
          </div>

          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <BrowserMockup />
      </div>
    </section>
  );
}

// Dibujo de una web de ejemplo hecho solo con divs: no necesita imágenes y pesa casi nada
function BrowserMockup() {
  return (
    <div className="hidden lg:block" aria-hidden="true">
      <div className="rounded-2xl border bg-card shadow-2xl shadow-foreground/10 overflow-hidden rotate-1">
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted">
          <span className="w-3 h-3 rounded-full bg-foreground/15" />
          <span className="w-3 h-3 rounded-full bg-foreground/15" />
          <span className="w-3 h-3 rounded-full bg-foreground/15" />
          <span className="ml-4 px-3 py-1 rounded-md bg-card text-xs text-muted-foreground">
            tucomercio.com.ar
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <span className="w-24 h-3 rounded bg-foreground/80" />
            <div className="flex gap-3">
              <span className="w-10 h-2 rounded bg-foreground/15" />
              <span className="w-10 h-2 rounded bg-foreground/15" />
              <span className="w-10 h-2 rounded bg-foreground/15" />
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-primary to-primary/60 p-6 space-y-3">
            <span className="block w-2/3 h-4 rounded bg-white/90" />
            <span className="block w-1/2 h-3 rounded bg-white/60" />
            <span className="inline-block mt-2 w-24 h-7 rounded-md bg-white" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-square rounded-lg bg-muted" />
                <span className="block w-3/4 h-2 rounded bg-foreground/20" />
                <span className="block w-1/3 h-2 rounded bg-primary/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
