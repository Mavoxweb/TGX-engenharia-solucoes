<h1 align="center">
  <br/>
  TGX Engenharia e Soluções
  <br/>
</h1>

<p align="center">
  Site institucional premium para empresa especializada em <strong>Engenharia Legal e Regularização Corporativa</strong> em São Paulo.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

## 📋 Visão Geral

Site institucional B2B da **TGX Engenharia e Soluções**, empresa especializada em regularização de edificações e licenciamentos corporativos na Região Metropolitana de São Paulo. O projeto foi desenvolvido com foco em alta conversão de leads, SEO técnico e design premium.

### 🎯 Objetivos do Projeto

- Posicionar a TGX como referência em engenharia legal e regularização
- Capturar leads qualificados via modal de contato integrado ao WhatsApp
- Oferecer conteúdo técnico de autoridade via blog especializado
- Garantir performance e ranqueamento orgânico com SEO on-page completo

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Hero Section** | Apresentação principal com CTA duplo e grade de serviços |
| **Seção de Serviços** | Cards detalhados com 6 especialidades técnicas |
| **Diferenciais** | Argumentos de conversão com prova social |
| **Processo de Trabalho** | Fluxo em 4 etapas do diagnóstico à entrega |
| **Depoimentos** | Provas sociais de clientes corporativos reais |
| **Logo Cloud** | Carousel animado com marcas atendidas |
| **FAQ** | Perguntas frequentes com animação de accordion |
| **Blog Técnico** | Artigos sobre engenharia legal e legislação |
| **Modal de Contato** | Formulário com validação + redirecionamento para WhatsApp |
| **CTA Final** | Banner de fechamento com foco em conversão |

---

## 🏗️ Stack Tecnológica

### Core
- **[React 19](https://react.dev/)** — UI Framework
- **[TypeScript 6](https://www.typescriptlang.org/)** — Tipagem estática
- **[Vite 8](https://vite.dev/)** — Bundler e servidor de desenvolvimento

### Estilização
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** — Animações e transições

### Roteamento & Forms
- **[React Router DOM v7](https://reactrouter.com/)** — Roteamento SPA
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — Formulários e validação

### UI & Ícones
- **[Lucide React](https://lucide.dev/)** — Ícones modernos
- **[Font Awesome 7](https://fontawesome.com/)** — Ícones complementares

### SEO & Segurança
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)** — Meta tags e Schema.org
- **[DOMPurify](https://github.com/cure53/DOMPurify)** — Sanitização de inputs

### Qualidade de Código
- **[Oxlint](https://oxc.rs/docs/guide/usage/linter)** — Linter ultrarrápido em Rust

---

## 🗂️ Estrutura do Projeto

```
tgx-engenharia/
├── public/
│   └── logos/              # Logos dos parceiros (SVG)
├── src/
│   ├── components/
│   │   ├── layout/         # Header e Footer
│   │   ├── ContactModal.tsx # Modal de captura de leads
│   │   └── ScrollToTop.tsx  # Utilitário de scroll
│   ├── contexts/
│   │   └── ModalContext.tsx # Estado global do modal
│   ├── data/
│   │   └── posts.ts        # Conteúdo do blog
│   ├── pages/
│   │   ├── Home.tsx        # Landing page principal
│   │   ├── Servicos.tsx    # Página de serviços
│   │   ├── Sobre.tsx       # Página institucional
│   │   ├── Contato.tsx     # Formulário de contato
│   │   ├── Blog.tsx        # Listagem do blog
│   │   ├── BlogPost.tsx    # Artigo individual
│   │   ├── Politicas.tsx   # Política de privacidade
│   │   └── Termos.tsx      # Termos de uso
│   ├── App.tsx             # Roteamento principal
│   ├── main.tsx            # Ponto de entrada
│   └── index.css           # Estilos globais e design tokens
├── vercel.json             # Configuração de deploy (SPA rewrites + cache)
├── tailwind.config.js      # Tema customizado
├── vite.config.ts          # Configuração do bundler
└── tsconfig.json           # Configuração TypeScript
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Node.js** `>= 20.x`
- **npm** `>= 10.x`

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/<seu-usuario>/tgx-engenharia.git
cd tgx-engenharia

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em **http://localhost:5173**.

### Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o bundle de produção em `/dist` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o linter Oxlint |

---

## ☁️ Deploy

O projeto é hospedado na **[Vercel](https://vercel.com/)** com deploy contínuo a partir do branch `master`.

### Fluxo de Deploy

```
git push origin master
       │
       ▼
   GitHub (origin/master)
       │
       ▼
  Vercel (CI/CD automático)
       │
       ▼
  tgxengenharia.com.br ✅
```

### Configurações de Produção (`vercel.json`)

- **SPA Rewrite** — todas as rotas redirecionam para `index.html`, garantindo navegação client-side
- **Cache de Assets** — arquivos em `/assets/` possuem cache imutável de 1 ano (`max-age=31536000, immutable`)

---

## 🔍 SEO & Performance

- Schema.org `ProfessionalService` implementado via JSON-LD
- Meta tags Open Graph em todas as páginas
- Títulos e descrições únicos por rota
- Lazy loading de imagens
- Bundle otimizado com code-splitting via Vite
- Assets estáticos com cache imutável na Vercel

---

## 📞 Contato & Suporte

**TGX Engenharia e Soluções**

- 🌐 [tgxengenharia.com.br](https://www.tgxengenharia.com.br)
- 📍 São Paulo e Grande SP
- 📱 WhatsApp: +55 (11) 94750-5886

---

## 📄 Licença

Este projeto é proprietário. Todos os direitos reservados © 2025 TGX Engenharia e Soluções. Não é permitida a reprodução, distribuição ou modificação sem autorização expressa.
