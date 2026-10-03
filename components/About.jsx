import Reveal from "./Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="container-fluid">
      <div className="grid grid-cols-1 gap-14 border-t border-border pt-12 lg:grid-cols-12 lg:gap-8">
        {/* Coluna esquerda */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">{about.eyebrow}</p>
            <h2 id="about-title" className="text-gradient text-headline font-semibold">
              {about.title}
            </h2>
          </Reveal>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted md:text-xl">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Princípios */}
          <ul className="grid divide-y divide-border border-y border-border">
            {about.principles.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 100}>
                <div className="group flex items-baseline justify-between gap-6 py-5 transition-colors duration-500 ease-premium">
                  <span className="flex items-baseline gap-4 text-lg font-medium transition-transform duration-500 ease-premium group-hover:translate-x-2">
                    <span className="text-xs tabular-nums text-accent">0{i + 1}</span>
                    {item.title}
                  </span>
                  <span className="max-w-[16rem] text-right text-sm text-muted">{item.text}</span>
                </div>
              </Reveal>
            ))}
          </ul>


        </div>
      </div>
    </section>
  );
}
