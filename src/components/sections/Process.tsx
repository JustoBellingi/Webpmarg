import { PROCESS_STEPS } from "@/config/site";

export default function Process() {
  return (
    <section id="proceso" className="section-padding bg-card border-y">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">Cómo trabajamos</h2>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.title}
              // En desktop, una línea une cada número con el del paso siguiente
              className="relative lg:last:after:hidden lg:after:absolute lg:after:top-5 lg:after:left-14 lg:after:-right-6 lg:after:h-px lg:after:bg-gradient-to-r lg:after:from-primary/40 lg:after:to-border"
            >
              <span className="flex items-center justify-center w-10 h-10 mb-5 rounded-full bg-primary/10 text-primary font-display font-bold ring-1 ring-primary/25">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
