import { SITE_NAME } from "@/config/site";
import { Logo } from "@/components/brand";

export default function Footer() {
  return (
    <footer className="bg-secondary py-10">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <Logo />
        <p>
          &copy; {new Date().getFullYear()} {SITE_NAME} · Hecho en Argentina
        </p>
      </div>
    </footer>
  );
}
