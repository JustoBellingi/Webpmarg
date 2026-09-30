import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/config/site";

export default function Portfolio() {
  return (
    <section id="trabajos" className="section-padding bg-card border-y">
      <div className="container-custom">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Nuestros trabajos</h2>
          <p className="text-muted-foreground">
            Algunas webs que ya están online. Entrá y miralas.
            <span className="sm:hidden"> Deslizá para ver más →</span>
          </p>
        </div>

        {/* En celular es un carrusel horizontal con snap; desde sm, grilla */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROJECTS.map((project) => {
            const domain = new URL(project.url).hostname.replace(/^www\./, "");
            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver el sitio de ${project.name} (se abre en otra pestaña)`}
                className="group flex flex-col w-[82%] shrink-0 snap-center sm:w-auto rounded-2xl bg-card overflow-hidden shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/30"
              >
                {/* Barra de navegador falsa: da contexto de "esto es una web" */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b bg-muted" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 truncate text-xs text-muted-foreground">{domain}</span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Captura del sitio de ${project.name}`}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Cover name={project.name} colors={project.colors} />
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                  </div>
                  <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Portada de reemplazo mientras no haya captura del sitio
function Cover({ name, colors }: { name: string; colors: string }) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${colors} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-dots" />
      <span className="relative font-display text-3xl font-extrabold text-white drop-shadow-sm">{name}</span>
    </div>
  );
}
