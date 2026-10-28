import Image from "next/image";
import { ArrowRight, Check, Smartphone } from "lucide-react";
import { PROJECTS, WHATSAPP_URL } from "@/config/site";
import { WhatsAppIcon } from "@/components/brand";

const PROMISES = ["Online en 2 semanas", "Pagás cuando la aprobás", "Soporte incluido"];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary text-white pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 bg-dots [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-glow" aria-hidden="true" />

      <div className="container-custom relative grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/15 bg-white/5 text-sm text-blue-200">
            <span className="relative flex w-2 h-2" aria-hidden="true">
              <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            Diseño web para comercios y pymes
          </p>

          <h1 className="text-[2.6rem] sm:text-6xl lg:text-[3.5rem] xl:text-[4.25rem] font-extrabold leading-[1.02] text-balance mb-6">
            Una web que te trae{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              clientes
            </span>
            , no solo visitas.
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-8 sm:mb-10 leading-relaxed">
            Hacemos la página de tu negocio para que te encuentren en Google y te escriban directo por
            WhatsApp. <span className="text-white font-medium">Sin vueltas y a precio justo.</span>
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 whitespace-nowrap">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/40 hover:bg-primary/90 transition"
            >
              <WhatsAppIcon />
              Quiero mi presupuesto gratis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#trabajos"
              className="flex items-center justify-center px-7 py-4 rounded-xl border border-white/20 font-semibold hover:bg-white/10 transition-colors"
            >
              Ver trabajos
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-white/80">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check className="w-3 h-3" aria-hidden="true" />
                </span>
                {promise}
              </li>
            ))}
          </ul>

          <p className="mt-10 pt-6 border-t border-white/10 text-sm text-white/50">
            Ya confían en nosotros:{" "}
            <span className="text-white/85 font-medium">{PROJECTS.map((p) => p.name).join(" · ")}</span>
          </p>
        </div>

        <Showcase />
      </div>
    </section>
  );
}

// Capturas reales de nuestros trabajos apiladas, con avisos flotantes de lo que logra una buena web
function Showcase() {
  const [front, back] = PROJECTS;

  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none" aria-hidden="true">
      {/* Ventana de atrás: solo desde sm, en celular ocupa demasiado */}
      <BrowserCard
        image={back.image}
        url={back.url}
        className="hidden sm:block absolute -top-8 -right-4 w-[85%] rotate-3 opacity-60"
      />
      <BrowserCard
        image={front.image}
        url={front.url}
        className="relative w-[92%] sm:w-[88%] -rotate-1 shadow-2xl shadow-primary/30"
      />

      {/* Aviso de WhatsApp: "esto es lo que te va a pasar" */}
      <div className="absolute -bottom-6 right-0 sm:-right-2 w-64 sm:w-72 rounded-2xl bg-white text-foreground p-3.5 shadow-2xl shadow-black/40 motion-safe:animate-float">
        <div className="flex items-start gap-3">
          <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-whatsapp text-white">
            <WhatsAppIcon className="w-5 h-5" />
          </span>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Nueva consulta desde tu web</p>
            <p className="text-sm font-medium leading-snug">¡Hola! ¿Tienen lugar para este finde? 🙌</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute top-1/3 -left-6 items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-sm font-medium shadow-xl motion-safe:animate-float [animation-delay:1.5s]">
        <Smartphone className="w-4 h-4 text-sky-300" />
        Perfecta en el celu
      </div>
    </div>
  );
}

function BrowserCard({ image, url, className = "" }: { image: string; url: string; className?: string }) {
  const domain = new URL(url).hostname.replace(/^www\./, "");

  return (
    <div className={`rounded-xl bg-white overflow-hidden ring-1 ring-white/10 ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b bg-muted">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 truncate rounded-md bg-card px-2.5 py-0.5 text-[11px] text-muted-foreground">{domain}</span>
      </div>
      <div className="relative aspect-[16/10] bg-muted">
        <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 520px, 90vw" className="object-cover object-top" />
      </div>
    </div>
  );
}
