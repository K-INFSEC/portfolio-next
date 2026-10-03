import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Kauã Batista | Qualidade, ISO 27001 & GRC",
  description:
    "Portfólio de Kauã Batista: Técnico em Qualidade em transição para Segurança da Informação, com foco em Governança, Riscos e Compliance (GRC).",
};

export const viewport = {
  themeColor: "#050A18",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
