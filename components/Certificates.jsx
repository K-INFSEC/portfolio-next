import fs from "node:fs";
import path from "node:path";
import Reveal from "./Reveal";
import CertificateGallery from "./CertificateGallery";
import { certificates as cfg } from "@/data/content";

const IMAGE_EXT = /\.(png|jpe?g|webp)$/i;

// "01-iso-27001_na-era-da-ia.png" -> "Iso 27001 na era da ia"
function prettify(filename) {
  const base = filename.replace(/\.[^.]+$/, "").replace(/^\d+[-_.\s]+/, "");
  const text = base.replace(/[-_]+/g, " ").trim();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function loadCertificates() {
  const dir = path.join(process.cwd(), "public", cfg.folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }))
      .map((file) => ({
        file,
        src: `/${cfg.folder}/${encodeURIComponent(file)}`,
        title: cfg.titles[file] || prettify(file),
      }));
  } catch {
    return []; // pasta ainda não existe
  }
}

export default function Certificates() {
  const items = loadCertificates();

  return (
    <section id="certificados" aria-labelledby="cert-title" className="container-fluid">
      <Reveal className="mb-14 border-t border-border pt-12">
        <p className="eyebrow mb-6">{cfg.eyebrow}</p>
        <h2 id="cert-title" className="text-gradient max-w-3xl text-headline font-semibold">
          {cfg.title}
        </h2>
      </Reveal>

      <CertificateGallery items={items} folder={cfg.folder} />
    </section>
  );
}
