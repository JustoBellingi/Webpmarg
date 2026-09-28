import { SITE_NAME, SOCIAL_LINKS } from "@/config/site";
import { Logo } from "@/components/brand";

const SOCIALS = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "Facebook", href: SOCIAL_LINKS.facebook },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <Logo />

        <ul className="flex gap-6">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p>
          &copy; {new Date().getFullYear()} {SITE_NAME} · Hecho en Argentina
        </p>
      </div>
    </footer>
  );
}
