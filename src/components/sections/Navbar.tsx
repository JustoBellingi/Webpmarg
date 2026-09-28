import { NAV_LINKS, WHATSAPP_URL } from "@/config/site";
import { Logo, WhatsAppIcon } from "@/components/brand";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b">
      <nav className="container-custom flex items-center justify-between h-16" aria-label="Navegación principal">
        <Logo />

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Escribinos
        </a>
      </nav>
    </header>
  );
}
