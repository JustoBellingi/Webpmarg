import { PROCESS_STEPS } from "@/config/site";

export default function Process() {
  return (
    <section id="proceso" className="section-padding bg-muted">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Cómo trabajamos</h2>

        <ol className="grid md:grid-cols-3 gap-10">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="flex items-center justify-center w-10 h-10 mb-5 rounded-full bg-foreground text-background font-semibold">
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
