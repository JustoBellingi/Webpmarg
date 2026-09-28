import { WHATSAPP_URL } from "@/config/site";
import { WhatsAppIcon } from "@/components/brand";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a WEBPMARG por WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50 w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
