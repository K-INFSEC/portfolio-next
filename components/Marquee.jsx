import { marquee } from "@/data/content";

export default function Marquee() {
  const items = [...marquee, ...marquee]; // duplicado para loop contínuo

  return (
    <div
      aria-label="Frameworks e competências"
      className="group relative overflow-hidden border-y border-border py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 whitespace-nowrap text-lg font-medium tracking-tight text-muted md:text-xl"
          >
            {item}
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
