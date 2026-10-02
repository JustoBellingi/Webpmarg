import { ArrowRight, Check } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";
import { WhatsAppIcon } from "@/components/brand";

const PERKS = ["Presupuesto sin cargo", "Respuesta en el día", "Sin compromiso"];

export default function FinalCTA() {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white shadow-2xl shadow-primary/30">
          {/* Fondo: trama de puntos + dos manchas de luz para dar profundidad */}
          <div className="absolute inset-0 bg-dots" aria-hidden="true" />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-indigo-400/30 blur-3xl" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center px-6 py-12 sm:px-12 md:py-16 lg:px-16">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-balance">
                ¿Arrancamos con tu web?
              </h2>
              <p className="text-lg text-white/80 mb-8">Contanos de tu negocio y te respondemos en el día.</p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-foreground font-semibold shadow-xl shadow-indigo-950/30 hover:bg-white/95 transition"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#1faa53]" />
                Hablar por WhatsApp
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 text-sm text-white/85">
                {PERKS.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                      <Check className="w-3 h-3" aria-hidden="true" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// Conversación de WhatsApp de ejemplo: muestra lo fácil que es el primer contacto
function ChatMockup() {
  return (
    <div className="hidden lg:block" aria-hidden="true">
      <div className="max-w-sm ml-auto rounded-2xl bg-[#efeae2] text-foreground shadow-2xl shadow-indigo-950/40 overflow-hidden rotate-2">
        <div className="flex items-center gap-3 px-4 py-3 bg-[#075e54] text-white">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center font-display font-bold text-sm">
            W
          </span>
          <div className="leading-tight">
            <p className="font-semibold text-sm">WEBPMARG</p>
            <p className="text-xs text-white/70">en línea</p>
          </div>
        </div>

        <div className="p-4 space-y-3 text-sm">
          <p className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 shadow-sm">
            ¡Hola! Quiero una web para mi negocio 👋
          </p>
          <p className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
            ¡Hola! Contanos qué hacés y te pasamos un presupuesto sin cargo.
          </p>
          <p className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 shadow-sm">
            ¡Genial! Tengo una panadería 🥐
          </p>
          <div className="flex gap-1 w-14 rounded-lg rounded-tl-none bg-white px-3 py-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 motion-safe:animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 motion-safe:animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 motion-safe:animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    </div>
  );
}
