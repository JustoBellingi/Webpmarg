import { PROCESS_STEPS } from "@/config/site";

// La línea que une los pasos: vertical en celular/tablet, horizontal en desktop
const CONNECTOR =
  "after:absolute after:bg-gradient-to-b after:from-primary/40 after:to-border last:after:hidden " +
  "after:left-5 after:top-12 after:-bottom-6 after:w-px " +
  "lg:after:top-5 lg:after:bottom-auto lg:after:left-14 lg:after:-right-6 lg:after:h-px lg:after:w-auto lg:after:bg-gradient-to-r";

export default function Process() {
  return (
    <section id="proceso" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 sm:mb-14">Cómo trabajamos</h2>

        <ol className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            // En celular, número a la izquierda y texto a la derecha (línea de tiempo)
            <li key={step.title} className={`relative flex gap-4 lg:block ${CONNECTOR}`}>
              <span className="flex items-center justify-center w-10 h-10 shrink-0 lg:mb-5 rounded-full bg-accent text-primary font-display font-bold ring-1 ring-primary/25 shadow-sm">
                {i + 1}
              </span>
              <div className="pt-1.5 lg:pt-0">
                <h3 className="text-lg font-semibold mb-1 lg:mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
