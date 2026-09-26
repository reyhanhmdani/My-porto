<div align="center">

# 🌐 Raihan Hamdani — Engineering Portfolio

**Production-grade, Minimalist Dark Portfolio & Interactive Technical Case Studies**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Go](https://img.shields.io/badge/Golang-1.24-00ADD8?style=flat-square&logo=go&logoColor=white)](https://go.dev/)
[![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon_Cloud-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://neon.tech/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Live Demo](https://clinic-app-bootcamps.vercel.app) • [GitHub Profile](https://github.com/reyhanhmdani) • [LinkedIn](https://linkedin.com/in/raihan-hamdani)

</div>

---

## 📖 Overview

A sleek, performance-focused personal web portfolio designed with an **Obsidian Dark Minimalist** design language. Built from the ground up to showcase production-ready full-stack software engineering projects with interactive technical case studies, dual-device viewport previews, architectural flowcharts, and system metrics.

---

## ✨ Key Architectural Highlights

- **🌑 Obsidian Dark Minimal Design System:** Clean `#101010` obsidian canvas paired with translucent `#1414149c` containers, `#A476FF` neon purple accents, and Montserrat variable typography.
- **💊 Floating Capsule Navigation:** Minimalist glassmorphic pill navbar with an active neon beacon indicator (`#A9FF5B`) and smooth mobile drawer.
- **♾️ Infinite Running Tech Marquee (`LogoWall`):** Lightweight, continuous CSS-accelerated marquee ticker with authentic brand fills (Go, Laravel, PostgreSQL, Docker, TypeScript, React, MySQL, Tailwind CSS, Git).
- **⚡ Interactive Skills Matrix & Glitch Canvas:** Smooth CSS Grid accordion transition (`grid-template-rows: 0fr ➔ 1fr`) paired with an algorithmic `LetterGlitch` canvas visualizer.
- **📱 Dual-View Project Showcase & Device Mockups:**
  - **Browser Window Preview:** Simulated macOS terminal/browser header bar on project cards.
  - **Responsive Smartphone Chassis:** Realistic mobile chassis mockup complete with dynamic status bar (signal, wifi, battery, and labels) for public/donatur/patient flows.
- **🔍 Fullscreen Technical Case Study Modal:**
  - Built with React Portals with `Escape` keyboard dismissal and background scroll-locking.
  - Device switcher toggling between **Desktop Admin CMS** and **Mobile App** viewports.
  - In-depth architectural narratives, 4-step user flows, technical stack breakdowns, and live project launching.
- **🚀 Sub-Second Performance:** Zero unnecessary heavyweight libraries; compiled with **Vite 8** and **Tailwind CSS v4** with integrated **Vercel Speed Insights**.

---

## 🛠️ Tech Stack & Ecosystem

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19.2](https://react.dev/) + [Vite 8](https://vite.dev/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/) + CSS Grid animations + Glassmorphism |
| **Backend Expertise** | Go (Gin, GORM, Goroutines, WebSockets), Laravel 11 (Modular API, Queue Workers, Blade) |
| **Databases & Cloud** | PostgreSQL (Neon Cloud Serverless), MySQL, Redis |
| **Infrastructure & DevOps** | Docker Multi-Stage (Alpine Linux ~10MB binaries), Vercel |
| **Payment & Integrations** | Midtrans Snap API (QRIS, VA, E-Wallet), Fonnte WhatsApp API |

---

## 📂 Featured Case Studies

### 1. [ReyClinic](https://clinic-app-bootcamps.vercel.app) — Full-Stack Healthcare Management System
* **Stack:** Golang 1.24 (Gin), React 19, TypeScript, Goroutines WebSocket, PostgreSQL (Neon Cloud), Midtrans QRIS, Docker Alpine.
* **Key Metric:** Single static binary with verified **10.29 MB RAM idle footprint**.
* **Highlights:** End-to-end digital clinic system: real-time patient queue without refresh via native WebSockets, Electronic Medical Records (EMR), automated pharmacy inventory deduction, and Midtrans Snap QRIS cashier.

### 2. [ayobuatbaik.com](https://ayobuatbaik.com) — Crowdfunding & Social Impact Platform
* **Stack:** Laravel 11, PHP 8.2+, MySQL, Blade Engine, Tailwind CSS, Midtrans, WhatsApp Fonnte API.
* **Key Metric:** **Rp 95Jt+ Distributed** across 500+ verified donor transactions.
* **Highlights:** Dual-surface application with comprehensive Admin CMS for campaign & financial governance plus a responsive mobile-first donation experience with automated WhatsApp notifications.

### 3. [andreraditya.guru](https://andreraditya.guru) — Personal & Educational Media Portal
* **Stack:** Laravel, Blade Engine, MySQL, SEO Architecture, RESTful API.
* **Highlights:** Structured educational platform for Ust. Andre Raditya with optimized Server-Side Rendering (SSR) and search engine indexing.

### 4. [selfa.sch.id](https://selfa.sch.id) — Institutional & School Portal
* **Stack:** React SPA, Vite, Tailwind CSS.
* **Highlights:** Lightweight and fast-loading portal for Sekolah Islam Selfa Klaten with digital student admission (PPDB online) workflows.

---

## 📁 Repository Structure

```text
react_portofolio2/
├── public/
│   ├── fonts/               # Montserrat variable webfonts
│   ├── image/               # High-res project screenshots & device previews
│   └── svg/                 # Official brand icons (Go, Laravel, Docker, etc.)
├── src/
│   ├── components/
│   │   ├── LetterGlitch.jsx # Algorithmic matrix glitch canvas
│   │   ├── LogoWall.jsx     # Seamless infinite running tech ticker
│   │   ├── Navbar.jsx       # Floating minimalist capsule navigation
│   │   ├── Projects.jsx     # Project cards, card slider & case study modal
│   │   ├── Reveal.jsx       # Viewport intersection scroll reveal wrapper
│   │   └── SkillsAccordion.jsx # Smooth CSS Grid tech capabilities accordion
│   ├── App.jsx              # Main page orchestration & layout
│   ├── index.css            # Tailwind CSS v4 directives & theme variables
│   └── main.jsx             # React DOM root entrypoint
├── package.json
└── vite.config.js
```

---

## 💻 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/reyhanhmdani/react_portofolio2.git
   cd react_portofolio2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   Compiled distribution bundle will be generated in `dist/`.

---

## 👤 Author

**Raihan Hamdani**
- **GitHub:** [@reyhanhmdani](https://github.com/reyhanhmdani)
- **LinkedIn:** [raihan-hamdani](https://linkedin.com/in/raihan-hamdani)
- **Email:** [rey7dan7@gmail.com](mailto:rey7dan7@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
