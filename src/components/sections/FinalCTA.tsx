import { WHATSAPP_URL } from "@/config/site";
import { WhatsAppIcon } from "@/components/brand";

export default function FinalCTA() {
  return (
    <section id="contacto" className="pb-20 md:pb-28">
      <div className="container-custom">
        <div className="rounded-3xl bg-secondary text-secondary-foreground px-6 py-14 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            ¿Arrancamos con tu web?
          </h2>
          <p className="text-secondary-foreground/70 mb-8">
            Contanos de tu negocio y te respondemos en el día.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-whatsapp text-[#0b3d1f] font-semibold hover:brightness-95 transition"
          >
            <WhatsAppIcon />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
