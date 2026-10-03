// ============================================================
// CONTEÚDO DO SITE — dados reais de Kauã Batista (edite aqui)
// ============================================================

export const profile = {
  name: "Kauã Batista",
  initials: "KB",
  role: "Qualidade · ISO 27001 · GRC e Gestão de Riscos",
  email: "kaua.coelho11@gmail.com",
  linkedin: "https://www.linkedin.com/in/kaua-batista-coelho/",
  github: "https://github.com/K-INFSEC",
  location: "Indaiatuba, SP · Brasil",
  status: "Em transição para Segurança da Informação · GRC",
  tagline:
    "Profissional de Qualidade em transição para Segurança da Informação, com foco em Governança, Riscos e Compliance. Aplico processos, auditoria e análise de dados para construir ambientes mais seguros e aderentes a normas.",
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Certificados", href: "#certificados" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  label: "PORTFÓLIO / 2026",
  name: "Kauã Batista",
  roleHighlight: "Segurança da Informação, Qualidade, Engenharia de Software",
  description:
    "Construindo ambientes corporativos seguros através da Gestão de Riscos, Compliance e Segurança da Informação.",
  cta: { label: "Entre em contato", href: "#contato" },
  cv: { label: "Baixar CV", href: "/Kaua_Curriculo.pdf" }, // coloque o PDF em /public
  links: [
    { label: "LinkedIn", href: profile.linkedin, external: true, icon: "linkedin" },
    { label: "GitHub", href: profile.github, external: true, icon: "github" },
    { label: "E-mail", href: `mailto:${profile.email}`, icon: "email" },
  ],
};

export const marquee = [
  "ISO/IEC 27001",
  "ISO 9001",
  "LGPD",
  "Gestão de Riscos",
  "Controles de Segurança",
  "Cibersegurança",
  "Auditoria Interna",
  "Melhoria Contínua",
  "Google Cloud",
  "Power BI",
];

export const about = {
  eyebrow: "01 — Sobre",
  title: "Qualidade e Segurança da Informação compartilham o mesmo propósito.",
  paragraphs: [
    "Minha base está em Sistemas de Gestão da Qualidade: normas ISO, auditorias, mapeamento de processos, não conformidades e ações corretivas. São competências que se aplicam diretamente à governança de segurança da informação.",
    "Hoje direciono meus estudos para GRC, com ênfase em ISO 27001, gestão de riscos e LGPD. Minha missão é unir as duas áreas, com uma visão analítica, estruturada e orientada a evidências.",
  ],
  principles: [
    { title: "Integridade", text: "Confiabilidade em processos, dados e decisões." },
    { title: "Conformidade", text: "Aderência a políticas, normas e requisitos." },
    { title: "Melhoria contínua", text: "Falhas identificadas viram ações corretivas." },
  ],
  stats: [
    { value: 4, suffix: "", label: "Normas no SGI (ISO 9001, 14001, 45001 e R2V3)" },
    { value: 4, suffix: "", label: "Certificações em segurança e nuvem" },
    { value: 2, suffix: "+", label: "Anos em Qualidade industrial" },
  ],
};

export const trajectory = {
  eyebrow: "02 — Trajetória",
  title: "Da qualidade industrial à segurança da informação.",
  timeline: [
    {
      period: "Out 2026 — Atual",
      role: "Estagiário de GRC",
      org: "Cielo",
      desc: "Foco em Governança de Riscos, aplicando a base de Qualidade e normas ISO à gestão de riscos corporativos.",
      current: true,
    },
    {
      period: "Fev 2025 — Jun 2025",
      role: "Controlador da Qualidade",
      org: "Re-Teck Brasil",
      desc: "SGI (ISO 9001, 14001, 45001 e R2V3), KPIs, relatórios em Power BI e preparação para auditorias.",
    },
    {
      period: "Ago 2024 — Jan 2025",
      role: "Assistente de Garantia da Qualidade",
      org: "Arfrio S.A. Armazéns Gerais Frigoríficos",
      desc: "Auditorias internas, análise de RNCs, equipe HACCP, indicadores e treinamentos.",
    },
    {
      period: "Fev 2023 — Jun 2024",
      role: "Aprendiz de Qualidade",
      org: "John Deere",
      desc: "Melhoria contínua (CI-200), 5S/Kaizen e dashboards em Power BI.",
    },
  ],
  skills: [
    "ISO/IEC 27001",
    "LGPD",
    "Gestão de Riscos",
    "Auditoria e Compliance",
    "Sistemas de Gestão da Qualidade (SGQ)",
    "Auditoria interna ISO 9001",
    "Investigação, análise e correção de Não Conformidades",
    "Melhoria Contínua",
    "Análise de Dados e Indicadores",
    "Fundamentos de Segurança da Informação e CyberSecurity",
    "Manutenção de Documentos do Sistema de Gestão",
    "Elaboração de Procedimentos, Políticas e POP’s",
    "Treinamentos e Conscientização",
    "Controles de Segurança",
    "Power BI",
  ],
  education: [
    {
      course: "Bacharelado em Engenharia de Software",
      school: "Anhanguera Educacional",
      period: "2026 — 2030",
    },
    {
      course: "Técnico em Qualidade",
      school: "SENAI São Paulo",
      period: "2023 — 2024",
    },
  ],
};

// ------------------------------------------------------------
// CERTIFICADOS
// Basta colocar os arquivos PNG (ou JPG/WEBP) na pasta
//   public/certificados/
// Eles aparecem automaticamente na seção, em ordem alfabética.
// Dica: nomeie como 01-iso-27001.png, 02-google-cloud.png... para ordenar.
//
// Opcional: defina um título bonito para cada arquivo abaixo.
// Sem título definido, o nome do arquivo é usado.
// ------------------------------------------------------------
export const certificates = {
  eyebrow: "03 — Certificados",
  title: "Formação contínua, comprovada.",
  folder: "certificados", // pasta dentro de /public
  titles: {
    // "01-iso-27001.png": "ISO/IEC 27001 na Era da IA",
    // "02-cc-domain-2.png": "CC Domain 2: Incident Response, BC & DR",
    // "03-google-cloud-redes.png": "Build and Secure Networks in Google Cloud",
    // "04-google-cloud-ia.png": "Perform Foundational Data, ML, and AI Tasks",
  },
};

export const contact = {
  eyebrow: "04 — Contato",
  title: "Vamos conversar sobre GRC e segurança?",
  socials: [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "E-mail", href: `mailto:${profile.email}` },
  ],
};
