import { hero } from "@/data/content";

const buttonBase =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-7 py-3.5 text-sm font-medium transition-colors duration-500 ease-premium";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen flex-col overflow-hidden pb-12 pt-[calc(var(--nav-height)+2rem)]"
    >
      {/* Aurora azul decorativa */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-accent/25 blur-[140px]" />
        <div className="absolute -right-[8%] top-[48%] h-[28rem] w-[28rem] rounded-full bg-accent-glow/20 blur-[150px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-accent/10 to-transparent" />
      </div>
      <div className="container-fluid flex flex-1 flex-col">
        {/* Topo esquerdo: rótulo */}
        <p className="eyebrow animate-fade-up [animation-delay:150ms]">{hero.label}</p>

        {/* Centro: nome gigante, descrição e botões */}
        <div className="flex flex-1 flex-col justify-center py-16">
          <h1
            id="hero-title"
            className="-mb-[0.08em] overflow-hidden pb-[0.08em] font-bold leading-[0.95] tracking-[-0.045em] [font-size:clamp(3.25rem,11.5vw,10.5rem)]"
          >
            <span
              className="block animate-line-up bg-gradient-to-br from-white from-35% via-[#cfe0ff] to-accent-light bg-clip-text text-transparent"
              style={{ animationDelay: "300ms" }}
            >
              {hero.name}
              <span className="text-accent">.</span>
            </span>
          </h1>

          <p className="mt-10 max-w-2xl animate-fade-up text-xl leading-relaxed text-muted [animation-delay:700ms] md:text-2xl">
            <span className="text-foreground">{hero.roleHighlight}</span>
            <span className="mx-2 text-accent">|</span>
            {hero.description}
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:900ms]">
            <a
              href={hero.cta.href}
              className={`${buttonBase} border-accent-light/50 text-foreground hover:border-accent hover:text-white`}
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-premium group-hover:scale-y-100"
              />
              <span className="relative">{hero.cta.label}</span>
            </a>
            <a
              href={hero.cv.href}
              download
              className={`${buttonBase} border-accent-light/50 text-foreground hover:border-accent hover:text-white`}
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-premium group-hover:scale-y-100"
              />
              <span className="relative">{hero.cv.label}</span>
            </a>
          </div>
        </div>

        {/* Direita: links em texto */}
        <ul className="flex flex-wrap animate-fade-up gap-6 text-sm text-muted [animation-delay:1100ms] md:absolute md:bottom-12 md:right-gutter md:flex-col md:flex-nowrap md:items-end md:gap-3">
          {hero.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex whitespace-nowrap items-center gap-2 transition-colors duration-500 ease-premium hover:text-foreground"
              >
                {l.icon === "github" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76 0-1.5-.5-2.8-1.4-3.8.14-.3.6-1.8-.14-3.8 0 0-1.2-.4-4 1.5-1.1-.3-2.3-.4-3.4-.4-1.1 0-2.3.1-3.4.4-2.8-1.9-4-1.5-4-1.5-.7 2-.3 3.5-.1 3.8-1 1-1.4 2.3-1.4 3.8 0 5.2 3 6.4 6 6.76-.7.6-1 1.5-1 2.9v4"/><path d="M9 20c-3 1-5-1-5-3"/></svg>
                )}
                {l.icon === "linkedin" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                )}
                {l.icon === "email" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                )}
                <span>{l.label}</span>
                <span
                  aria-hidden
                  className="text-accent transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
