# 🛒 SensorMercado B2B — Plataforma de Inteligência de Mercado & Precificação Varejista

![Next.js 16](https://img.shields.io/badge/Next.js-16.3.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-13.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento_/_Produção-00C853?style=for-the-badge)

> **SensorMercado B2B** é uma solução de alta performance desenvolvida para revolucionar a monitoria de concorrentes, auditoria de gôndola, precificação dinâmica e trade marketing no varejo alimentar e distribuidor (Supermercados, Atacarejos, Indústria e Agências).

---

## 📌 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Stack Tecnológica](#-stack-tecnológica)
- [Arquitetura de Pastas](#-arquitetura-de-pastas)
- [Primeiros Passos](#-primeiros-passos)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Executando em Desenvolvimento](#executando-em-desenvolvimento)
  - [Build de Produção](#build-de-produção)
- [Design System & Estilização](#-design-system--estilização)
- [SEO & Otimização](#-seo--otimização)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🚀 Visão Geral

O **SensorMercado B2B** resolve as principais dores operacionais do varejo moderno: precificação desatualizada, perda de margem de lucro por guerra de preços regional, demoras na confecção e distribuição de tablóides promocionais e falta de inteligência de gôndola em tempo real.

A aplicação web entrega uma experiência visual **high-end**, responsiva e interativa com simulação de ROI, gestão de filiais/matriz, app mobile simulado de campo e canal exclusivo para agências parceiras.

---

## ✨ Funcionalidades Principais

| Módulo | Descrição |
| :--- | :--- |
| **📊 Inteligência de Preços** | Monitoramento automatizado e alertas em tempo real de variações nos concorrentes. |
| **🏢 Gestão Matriz & Filial** | Visão centralizada por regional com comparação direta de precificação e margem. |
| **📱 App do Auditor (Mobile)** | Coleta em campo offline/online de pesquisas de preços e ruptura de estoque. |
| **📰 Print to Digital** | Conversão instantânea de tablóides impressos para encartes digitais dinâmicos no WhatsApp. |
| **💡 Simulador Interativo de ROI** | Calculadora dinâmica em tempo real para estimar ganho de margem e redução de custos. |
| **🤝 Programa de Agências Parceiras** | Portal dedicado (`/seja-parceiro-agencia`) com modelo de remuneração e comissionamento. |
| **📝 Formulário Inteligente de Demo** | Captura de leads B2B otimizada com validação e feedback visual de envio. |

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema JavaScript/TypeScript:

- **Framework**: [Next.js 16.3 (App Router)](https://nextjs.org/)
- **Biblioteca UI**: [React 19.2](https://react.dev/)
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss`
- **Animações**: [Motion (Framer Motion v13)](https://motion.dev/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Utilitários de Estilo**: `clsx` + `tailwind-merge`

---

## 📂 Arquitetura de Pastas

```text
sensormercadob2b/
├── public/                  # Ativos estáticos e imagens
├── src/
│   ├── app/                 # Next.js App Router (Páginas, Layouts, Metadata)
│   │   ├── favicon.ico
│   │   ├── globals.css      # Tokens globais de design e utilitários Tailwind v4
│   │   ├── layout.tsx       # Root Layout com fontes e metadados OpenGraph
│   │   ├── page.tsx         # Landing Page principal B2B
│   │   ├── robots.ts        # Geração dinâmica de robots.txt
│   │   ├── sitemap.ts       # Geração dinâmica de sitemap.xml
│   │   └── seja-parceiro-agencia/ # Página B2B para parceiros agências
│   ├── components/          # Componentes reutilizáveis e seções
│   │   ├── agency/          # Componentes específicos do fluxo de agências
│   │   ├── hero/            # Hero section e demos interativas
│   │   ├── layout/          # Navbar, Footer e estruturas de página
│   │   ├── sections/        # Seções modulares da landing page
│   │   └── ui/              # Componentes de UI atômicos (Botões, Cards, Modais)
│   ├── data/                # Mocks de dados, constantes e conteúdos estáticos
│   ├── lib/                 # Utilitários globais (cn, helpers de formatação)
│   └── types/               # Definições de tipos TypeScript interfaces/types
├── eslint.config.mjs        # Configuração do ESLint 9
├── next.config.ts           # Configuração do Next.js
├── postcss.config.mjs       # Pipeline PostCSS para Tailwind v4
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Manifest do projeto e dependências
```

---

## ⚡ Primeiros Passos

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **Node.js**: `>= 18.17.0` (Recomendado Node 20 LTS ou superior)
- **Gerenciador de pacotes**: `npm` (padrão), `pnpm`, `yarn` ou `bun`

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/sensormercadob2b.git
   cd sensormercadob2b
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

### Executando em Desenvolvimento

Inicie o servidor local de desenvolvimento:

```bash
npm run dev
```

Acesse no seu navegador: [http://localhost:3000](http://localhost:3000)

### Build de Produção

Para validar a compilação e gerar o bundle otimizado:

```bash
npm run build
```

Para rodar o servidor de produção localmente após o build:

```bash
npm run start
```

---

## 🎨 Design System & Estilização

A interface adota uma estética **premium B2B**, focada em legibilidade, contraste acessível e micro-interações fluidas:

- **Paleta Principais Tokens**:
  - **Fundo Primário**: `#F9F7F3` (Off-white aconchegante)
  - **Texto Principal**: `#2B2523` (Grafite escuro de alto contraste)
  - **Destaque/Accent**: `#F59E0B` (Amber vibrante para conversão/CTAs)
  - **Brand Secondary**: Efeitos em vidro (Glassmorphism), bordas sutis e gradientes escuros.
- **Tipografia**: Otimizada com `next/font` para garantir zero FOUT/CLS.

---

## 🔍 SEO & Otimização

- **OpenGraph & Twitter Cards**: Configurados no [layout.tsx](file:///c:/Users/Usuario/Desktop/antigravity/sensormercadob2b/src/app/layout.tsx).
- **Indexadores**: Meta tags de robôs dinâmicas via `robots.ts` e index de sitemap em `sitemap.ts`.
- **Performance**: Componentes Server-Side por padrão no App Router, enviando JavaScript mínimo ao cliente.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o ambiente de desenvolvimento local. |
| `npm run build` | Compila o código TypeScript e constrói a aplicação Next.js otimizada para produção. |
| `npm run start` | Inicia a aplicação em modo de produção (exige `npm run build` prévio). |
| `npm run lint` | Executa o linter ESLint para verificar padrões e problemas de código. |

---

## 🤝 Contribuição

Contribuições são super bem-vindas! Siga os passos:

1. Faça um Fork do projeto
2. Crie uma branch para sua Feature (`git checkout -b feature/IncrívelFeature`)
3. Adicione suas mudanças (`git commit -m 'feat: Adiciona incrível feature'`)
4. Envie a branch (`git push origin feature/IncrívelFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT** — consulte o arquivo LICENSE para mais detalhes.

---

<p align="center">
  Desenvolvido com 💛 para revolucionar o Trade Marketing e a Precificação no Varejo.
</p>
