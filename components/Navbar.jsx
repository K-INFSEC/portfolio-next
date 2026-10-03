"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-700 ease-premium ${
        scrolled ? "border-border bg-background/70" : "border-transparent bg-background/20"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container-fluid flex h-[var(--nav-height)] items-center justify-between"
      >
        <a
          href="#inicio"
          className="flex items-center gap-3 text-sm font-semibold tracking-tight transition-opacity duration-500 ease-premium hover:opacity-70"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-border text-[11px] tracking-wider">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">
            {profile.name}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="flex items-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-muted transition-colors duration-500 ease-premium hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 ease-premium group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* barra de progresso de leitura */}
      <div
        aria-hidden
        className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
