import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import PolygonTrail from "@/components/PolygonTrail";

// Lê public/certificados a cada acesso: novos PNGs aparecem sem rebuild.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <PolygonTrail />

      {/* Atmosfera azul fixa: luz no topo e no rodapé */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(37,99,235,0.28),transparent_70%),radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(59,130,246,0.14),transparent_70%)]"
      />

      {/* Linhas de grid verticais sutis (alinhadas ao container) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="container-fluid grid h-full grid-cols-2 md:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`border-l border-accent-light/[0.09] ${i === 3 ? "border-r" : ""} ${
                i > 1 ? "hidden md:block" : ""
              } ${i === 1 ? "max-md:border-r" : ""}`}
            />
          ))}
        </div>
      </div>

      <Navbar />
      <main className="relative z-10 flex flex-col gap-section">
        <div className="flex flex-col gap-0">
          <Hero />
          <Marquee />
        </div>
        <About />
        <BentoGrid />
        <Certificates />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
