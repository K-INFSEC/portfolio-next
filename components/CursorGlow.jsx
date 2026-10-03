"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    let cx = x;
    let cy = y;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      // interpolação suave (lerp) para sensação "premium"
      cx += (x - cx) * 0.08;
      cy += (y - cy) * 0.08;
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full bg-accent/[0.16] blur-[120px]"
    />
  );
}
