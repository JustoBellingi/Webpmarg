import { WHATSAPP_URL } from "@/config/site";
import { WhatsAppIcon } from "@/components/brand";

export default function FinalCTA() {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-indigo-600 text-white px-6 py-14 md:py-20 text-center shadow-2xl shadow-primary/25">
          <div className="absolute inset-0 bg-dots" aria-hidden="true" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-balance">
              ¿Arrancamos con tu web?
            </h2>
            <p className="text-white/80 mb-8">Contanos de tu negocio y te respondemos en el día.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-white text-foreground font-semibold shadow-lg hover:bg-white/90 transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#1faa53]" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
