import Reveal from "./Reveal";
import { contact, profile } from "@/data/content";

export default function Footer() {
  return (
    <footer id="contato" className="container-fluid relative mt-section pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[28rem] w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
      />
      <Reveal className="border-t border-border pt-12">
        <p className="eyebrow mb-6">{contact.eyebrow}</p>
        <h2 className="mb-10 max-w-3xl text-headline font-semibold text-accent-light/60">
          {contact.title}
        </h2>

        {/* E-mail em destaque */}
        <a
          href={`mailto:${profile.email}`}
          className="group relative inline-block max-w-full break-words text-[clamp(1.75rem,6.5vw,6.5rem)] font-semibold leading-none tracking-[-0.04em] transition-colors duration-500 ease-premium hover:text-accent-glow"
        >
          {profile.email}
          <span className="ml-4 inline-block translate-y-[-0.05em] text-accent transition-transform duration-500 ease-premium group-hover:translate-x-2 group-hover:-translate-y-2">
            ↗
          </span>
          <span className="absolute -bottom-3 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-premium group-hover:scale-x-100" />
        </a>
      </Reveal>

      <div className="mt-28 grid gap-8 border-t border-border pt-8 text-sm text-muted md:grid-cols-3 md:items-center">
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {contact.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="transition-colors duration-500 ease-premium hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="md:text-center">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="#inicio"
          className="transition-colors duration-500 ease-premium hover:text-foreground md:justify-self-end"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
