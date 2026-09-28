import { WHATSAPP_URL } from "@/config/site";
import { WhatsAppIcon } from "@/components/brand";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary text-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-dots" aria-hidden="true" />
      <div className="absolute inset-0 bg-glow" aria-hidden="true" />

      <div className="container-custom relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/15 bg-white/5 text-sm text-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
            Diseño web para comercios · La Plata
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance mb-6">
            Tu comercio, online en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              2 semanas
            </span>
            .
          </h1>

          <p className="text-lg text-white/65 max-w-md mb-10">
            Páginas web simples, rápidas y a precio justo para negocios chicos y medianos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
            >
              <WhatsAppIcon />
              Pedí tu presupuesto
            </a>
            <a
              href="#planes"
              className="flex items-center justify-center px-6 py-3.5 rounded-lg border border-white/20 font-semibold hover:bg-white/10 transition-colors"
            >
              Ver planes
            </a>
          </div>
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
      <div className="rounded-2xl bg-white text-foreground shadow-2xl shadow-primary/25 ring-1 ring-white/10 overflow-hidden rotate-1">
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted">
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-amber-400/70" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
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

          <div className="rounded-xl bg-gradient-to-br from-primary to-indigo-500 p-6 space-y-3">
            <span className="block w-2/3 h-4 rounded bg-white/90" />
            <span className="block w-1/2 h-3 rounded bg-white/60" />
            <span className="inline-block mt-2 w-24 h-7 rounded-md bg-white" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["from-amber-100 to-orange-200", "from-sky-100 to-blue-200", "from-emerald-100 to-teal-200"].map((bg) => (
              <div key={bg} className="space-y-2">
                <div className={`aspect-square rounded-lg bg-gradient-to-br ${bg}`} />
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
