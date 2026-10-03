import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { trajectory as t } from "@/data/content";

const Label = ({ children }) => <p className="eyebrow mb-8 flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>{children}</p>;

export default function BentoGrid() {
  return (
    <section id="trajetoria" aria-labelledby="bento-title" className="container-fluid">
      <Reveal className="mb-14 border-t border-border pt-12">
        <p className="eyebrow mb-6">{t.eyebrow}</p>
        <h2 id="bento-title" className="text-gradient max-w-3xl text-headline font-semibold">
          {t.title}
        </h2>
      </Reveal>

      <div className="grid auto-rows-[minmax(16rem,auto)] grid-cols-1 gap-4 md:grid-cols-6">
        {/* Trajetória — card grande */}
        <Reveal className="md:col-span-4 md:row-span-2">
          <SpotlightCard className="h-full">
            <Label>Trajetória</Label>
            <ol className="mt-12 flex flex-col">
              {t.timeline.map((item) => (
                <li
                  key={item.period}
                  className="group/item grid gap-2 border-t border-border py-7 first:border-t-0 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-6"
                >
                  <span className="flex items-center gap-2 text-sm tabular-nums text-muted">
                    {item.current && (
                      <span aria-hidden className="relative flex h-2 w-2">
                        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-glow" />
                        <span className="relative h-2 w-2 rounded-full bg-accent-glow" />
                      </span>
                    )}
                    <span className={item.current ? "text-accent-light" : ""}>{item.period}</span>
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight transition-colors duration-500 ease-premium group-hover/item:text-accent-glow md:text-3xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70">{item.org}</p>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </SpotlightCard>
        </Reveal>

        {/* Competências */}
        <Reveal delay={120} className="md:col-span-2">
          <SpotlightCard className="h-full">
            <Label>Competências</Label>
            <ul className="mt-10 flex flex-wrap gap-2">
              {t.skills.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground/80 transition-colors duration-500 ease-premium hover:border-accent/50 hover:text-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>

        {/* Formação */}
        <Reveal delay={240} className="md:col-span-2">
          <SpotlightCard className="h-full">
            <Label>Formação</Label>
            <ul className="mt-10 flex flex-col divide-y divide-border">
              {t.education.map((e) => (
                <li key={e.course} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="text-base font-medium leading-snug tracking-tight">{e.course}</h3>
                  <p className="mt-1 text-sm text-muted">{e.school}</p>
                  <p className="mt-1 text-xs tabular-nums text-accent-light/80">{e.period}</p>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
