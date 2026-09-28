import { NAV_LINKS, WHATSAPP_URL } from "@/config/site";
import { Logo, WhatsAppIcon } from "@/components/brand";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-white/10">
      <nav className="container-custom flex items-center justify-between h-16" aria-label="Navegación principal">
        <Logo />

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Escribinos
        </a>
      </nav>
    </header>
  );
}
