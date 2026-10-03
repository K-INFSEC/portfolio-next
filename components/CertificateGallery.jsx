"use client";

import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function CertificateGallery({ items, folder }) {
  const [active, setActive] = useState(null); // índice aberto no lightbox

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  /* Estado vazio: slots pontilhados que orientam o upload */
  if (items.length === 0) {
    return (
      <div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal as="li" key={i} delay={i * 100}>
              <div className="grid aspect-[4/3] place-items-center rounded-3xl border border-dashed border-accent-light/30 bg-accent/[0.05] text-center">
                <div>
                  <span className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full border border-accent-light/40 text-accent-light">
                    +
                  </span>
                  <p className="text-sm text-muted">Seu certificado aqui</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Coloque seus arquivos PNG na pasta{" "}
          <code className="rounded bg-accent/15 px-1.5 py-0.5 text-accent-light">
            public/{folder}/
          </code>{" "}
          e recarregue a página.
        </p>
      </div>
    );
  }

  const current = active !== null ? items[active] : null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal as="li" key={item.file} delay={(i % 3) * 100}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ampliar certificado: ${item.title}`}
              className="group relative block w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/[0.12] via-surface to-surface p-3 text-left transition-[border-color,transform] duration-700 ease-premium hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={`Certificado: ${item.title}`}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-border bg-background/70 text-xs text-accent-light opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                  ⤢
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-4">
                <h3 className="text-sm font-medium leading-snug">{item.title}</h3>
                <span className="text-xs tabular-nums text-accent-light/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </ul>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
          className="fixed inset-0 z-[100] flex animate-fade-up flex-col items-center justify-center bg-background/90 p-4 backdrop-blur-xl md:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-border text-lg transition-colors duration-300 hover:border-accent hover:bg-accent"
          >
            ✕
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border transition-colors duration-300 hover:border-accent hover:bg-accent md:left-8"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Próximo"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border transition-colors duration-300 hover:border-accent hover:bg-accent md:right-8"
              >
                →
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={`Certificado: ${current.title}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[78vh] max-w-full rounded-xl border border-border object-contain shadow-[0_0_80px_rgba(37,99,235,0.25)]"
          />
          <p className="mt-5 text-sm text-muted">
            <span className="text-foreground">{current.title}</span>
            <span className="mx-3 text-accent">·</span>
            {active + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
