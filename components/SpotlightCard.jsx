"use client";

import { useRef } from "react";

export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/[0.12] via-surface to-surface p-7 transition-all duration-700 ease-premium hover:border-accent/50 hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.25)] hover:z-10 md:p-8 ${className}`}
    >
      {/* brilho que segue o cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(59,130,246,0.26), transparent 60%)",
        }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </article>
  );
}
