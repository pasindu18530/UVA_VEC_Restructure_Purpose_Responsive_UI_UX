# THE UVA VEC — Unified Portal Redesign

> **Production-Ready React + Vite Website Rebuilt Faithfully from Google Stitch**

A multidisciplinary AI-native venture infrastructure company operating across strategic systems, product ecosystems, growth automation, AI workforce infrastructure, venture acceleration, and scalable execution platforms.

---

## 🚀 Overview

This repository transforms the exported Google Stitch UI/UX design into a production-grade, highly performant, responsive web application built with **React**, **Vite**, and **Tailwind CSS**.

### Key Highlights
- **100% Faithful Design Preservation**: Exact typography, tokens, copy, spacing, color schemes, and visual hierarchy from the Google Stitch source.
- **Pixel-Accurate Downloaded Assets**: Real photographic imagery and corporate assets preserved locally in `/public/assets/`.
- **Fully Interactive Frontend**:
  - Live filterable catalogues (Services & Products matrices).
  - Careers department filters, role deliverable drawers, and interactive FAQ accordions.
  - Interactive **Growth Audit Request Modal** with form validation.
  - Interactive **Client Diagnostic Terminal HUD Modal** with real-time status telemetry and CLI command execution (`$ status`, `$ engines`, `$ ping`, `$ audit`, `$ clear`).
  - Active navigation indicators, responsive mobile hamburger drawer, and seamless routing.
  - Integration with Calendly discovery bookings (`https://calendly.com/inyoweng/new-meeting`) and live product portals.
- **Production & Vercel Ready**: Configured with `vercel.json` for single-page application (SPA) routing fallbacks and zero build warnings.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) customized with exact Stitch theme tokens
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Icons**: [Material Symbols Outlined](https://fonts.google.com/icons) & [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`)

---

## 📁 Project Structure

```text
stitch_uva_vec_unified_portal_redesign/
├── public/
│   └── assets/                     # Preserved Stitch images and logos
│       ├── logo.png
│       ├── cinematic-engineering.png
│       ├── ai-lab.png
│       ├── trading-desk.png
│       ├── tech-team.png
│       ├── engineers-workplace.png
│       └── executive-boardroom.png
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── Header.tsx              # Desktop & mobile nav, terminal & audit triggers
│   │   ├── Footer.tsx              # Global navigation, system latency telemetry
│   │   ├── AuditModal.tsx          # Interactive Growth Audit request dialog
│   │   └── TerminalModal.tsx       # Live diagnostic CLI terminal HUD
│   ├── pages/                      # Application route views
│   │   ├── HomePage.tsx            # Corporate overview, hero, 11-step index, telemetry
│   │   ├── ServicesPage.tsx        # 4-tier interactive services matrix
│   │   ├── ProductsPage.tsx        # Portfolio filter, flagship systems, inquiry form
│   │   ├── BusinessSupportPage.tsx # 5-step venture maturation, 4 pricing packages
│   │   ├── CareersPage.tsx         # Open opportunities, role drawers, FAQ accordion
│   │   ├── InsightsPage.tsx        # Research thesis & architectural axioms
│   │   └── AboutPage.tsx           # Corporate overview, 4 vectors, executive pedigree
│   ├── App.tsx                     # Route provider & modal orchestration
│   ├── main.tsx                    # React DOM entry point
│   └── index.css                   # Tailwind directives & base styles
├── index.html                      # HTML shell with Google Fonts & metadata
├── tailwind.config.js              # Stitch design token extensions
├── vite.config.ts                  # Vite build configuration
├── vercel.json                     # Vercel deployment SPA rewrite rule
└── package.json                    # Project dependencies and build scripts
```

---

## 🌐 Routes & Pages

| Route | Page | Description |
|---|---|---|
| `/` | `HomePage` | Executive command dossier, flagship systems, 11-step thesis, and real-time telemetry. |
| `/services` | `ServicesPage` | 4-category services filter (AI Workforce, Growth & Automation, Knowledge Systems, Enterprise SaaS). |
| `/products-and-platforms` | `ProductsPage` | Complete venture platform ecosystem, live terminal status, and direct platform links. |
| `/business-idea-support` | `BusinessSupportPage` | 5-step venture maturation framework, 4 packages ($109, $199, $449, $749), and 10× cost metric. |
| `/careers` | `CareersPage` | Global async talent intake, department filtering, expandable deliverables, and recruitment FAQ. |
| `/insights` | `InsightsPage` | Operational analysis, research thesis, and six structural axioms of venture architecture. |
| `/about` | `AboutPage` | Corporate pedigree, executive exposure, and 4 vectors of execution. |

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The server will start at `http://localhost:5173`. Open your browser to test interactive states, navigation, and responsiveness.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Vercel Deployment Guide

This project is pre-configured for seamless zero-config deployment to [Vercel](https://vercel.com):

1. **Push to GitHub / GitLab / Bitbucket**:
   Ensure your repository contains this root directory with `package.json`, `vite.config.ts`, and `vercel.json`.
2. **Import Project into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your repository.
   - Framework Preset will auto-detect as **Vite**.
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy**:
   Click **Deploy**. Vercel will build the production bundle and route all SPA navigation paths through `vercel.json` without 404 errors.
