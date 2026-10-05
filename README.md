# 🚀 Portfólio de Governança, Riscos e Compliance (GRC)

Bem-vindo ao repositório do meu portfólio pessoal. Este projeto foi desenvolvido com foco em **Segurança da Informação, Qualidade e Engenharia de Software**, refletindo minha trajetória profissional e minhas competências técnicas.

O site possui um design *Premium* e Minimalista (*Dark Mode*), projetado com uma interface inspirada em padrões "Awwwards", utilizando efeitos modernos de UI e interações sutis.

## 🔗 Acesse o Projeto Online
[Acesse o Portfólio de Kauã Batista](https://portfolio-next-three-puce.vercel.app/)

---

## 🛠 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas focadas em performance e componentização:

* **[Next.js 14](https://nextjs.org/)** - Framework React com App Router.
* **[React](https://react.dev/)** - Biblioteca de UI.
* **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária (*Mobile-First*).
* **[Lucide React](https://lucide.dev/)** / **SVGs Inlines** - Para a iconografia.

## ✨ Funcionalidades em Destaque

* **Bento Grid (Layout):** Organização das seções de Trajetória, Formação e Competências em formato de grid responsivo, garantindo leitura dinâmica em celulares e desktops.
* **Galeria Dinâmica de Certificados:** Sistema inteligente que varre automaticamente a pasta de arquivos locais para listar os certificados do usuário sem a necessidade de intervenção direta no código.
* **Efeitos e Animações Premium:**
  * Efeito de aurora luminosa interativa no fundo.
  * *Spotlight Cards*: Os cards reagem à posição do cursor do mouse.
  * Efeito de rastro/partículas poligonais seguindo o ponteiro (*Cursor Trail*).
  * Escalabilidade e sombras dinâmicas no *hover* (foco do mouse).
* **Arquitetura Orientada a Dados:** Todo o conteúdo de texto do site é centralizado no arquivo `data/content.js`, separando a lógica de design do conteúdo inserido.

## 🛡️ Segurança e DevSecOps (Hardening)

Sendo um portfólio de um profissional de Segurança da Informação, o código foi auditado e desenvolvido seguindo as melhores práticas de **Clean Code** e **Segurança (Security by Design)**:
* **Zero Vulnerabilidades de Injeção:** Arquitetura 100% estática baseada no padrão JAMStack. A ausência de banco de dados e formulários impossibilita ataques como *SQL Injection (SQLi)* e *Cross-Site Scripting (XSS)*.
* **Security Headers Rigorosos:** O arquivo `next.config.mjs` possui cabeçalhos de segurança estritos (*Hardening*):
  * `Strict-Transport-Security (HSTS)`: Força conexões criptografadas (HTTPS).
  * `X-Frame-Options: DENY`: Mitigação contra ataques de Clickjacking.
  * `X-Content-Type-Options: nosniff`: Bloqueia farejamento de MIME types.
  * `Referrer-Policy: strict-origin-when-cross-origin`: Protege dados de navegação.
  * `Permissions-Policy`: Bloqueio de hardware (câmera, microfone, geolocalização).
* **Proteção de Dados Pessoais:** Nenhuma API externa ou banco de dados é acionado no cliente, garantindo vazamento zero de informações além do currículo público.

---

## 💻 Estrutura do Projeto

* `app/` - Contém o roteamento principal do Next.js (App Router), configurações globais (CSS) e o layout base.
* `components/` - Todos os componentes visuais isolados (ex: `Hero.jsx`, `BentoGrid.jsx`, `SpotlightCard.jsx`).
* `data/` - Base de dados local (`content.js`) para fácil edição dos textos, links e descrições do portfólio sem alterar o HTML.
* `public/` - Arquivos públicos estáticos como o PDF do currículo (`Kaua_Curriculo.pdf`) e os certificados em imagens (na pasta `/certificados/`).

## 🚀 Como rodar o projeto localmente

Se você deseja rodar este projeto em sua própria máquina, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/K-INFSEC/nome-do-seu-repositorio.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd nome-do-seu-repositorio
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
5. **Visualize no navegador:**
   Abra `http://localhost:3000`.

---
*Feito com foco em Governança, Segurança e Qualidade.*
