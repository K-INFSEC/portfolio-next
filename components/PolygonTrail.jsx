"use client";

import { useEffect, useRef } from "react";

/**
 * Rastro discreto de polígonos (triângulos a hexágonos, só contorno)
 * que nascem ao mover o mouse, derivam para longe e desaparecem.
 */
export default function PolygonTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const MAX_PARTICLES = 48;
    const SPAWN_DISTANCE = 34; // px percorridos entre cada polígono
    const COLORS = ["127,168,255", "59,130,246", "37,99,235"];

    let particles = [];
    let raf = null;
    let last = null;
    let travelled = 0;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const spawn = (x, y, dx, dy) => {
      if (particles.length >= MAX_PARTICLES) particles.shift();
      const angle = Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 1.6; // sai "para trás"
      const speed = 0.25 + Math.random() * 0.6;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 5 + Math.random() * 8,
        sides: 3 + Math.floor(Math.random() * 4), // 3 a 6 lados
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.04,
        life: 0,
        maxLife: 700 + Math.random() * 600,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        filled: Math.random() < 0.25,
      });
    };

    const drawPolygon = (p, alpha) => {
      ctx.beginPath();
      for (let i = 0; i < p.sides; i++) {
        const a = p.rot + (i / p.sides) * Math.PI * 2;
        const px = p.x + Math.cos(a) * p.size;
        const py = p.y + Math.sin(a) * p.size;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(${p.color},${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      if (p.filled) {
        ctx.fillStyle = `rgba(${p.color},${alpha * 0.18})`;
        ctx.fill();
      }
    };

    let prevTime = performance.now();
    const loop = (now) => {
      const dt = Math.min(now - prevTime, 40);
      prevTime = now;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles = particles.filter((p) => p.life < p.maxLife);
      for (const p of particles) {
        p.life += dt;
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        p.rot += p.vr;
        const t = p.life / p.maxLife;
        drawPolygon(p, (1 - t) * 0.55); // opacidade máx. 0.55, some suavemente
      }

      raf = particles.length ? requestAnimationFrame(loop) : null; // pausa quando vazio
    };

    const onMove = (e) => {
      if (last) {
        const dx = e.clientX - last.x;
        const dy = e.clientY - last.y;
        travelled += Math.hypot(dx, dy);
        if (travelled >= SPAWN_DISTANCE) {
          travelled = 0;
          spawn(e.clientX, e.clientY, dx, dy);
          if (!raf) {
            prevTime = performance.now();
            raf = requestAnimationFrame(loop);
          }
        }
      }
      last = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      last = null;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60]"
    />
  );
}
