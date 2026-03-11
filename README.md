# 💎 dribbble — Premium UI Kit & Landing Page

[![AIOX Framework](https://img.shields.io/badge/Framework-AIOX-blueviolet?style=flat-square)](https://github.com/ssnowzx/aiox)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7+-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

Uma Landing Page de altíssima fidelidade desenvolvida para o ecossistema Web3/SaaS, focada em performance bruta e micro-detalhes visuais impecáveis. Este projeto utiliza a estética **0.6px Precision** e foi orquestrado integralmente via **Synkra AIOX Framework**.

---

## ✨ Key Features

- **🚀 0.6px Aesthetic:** Bordas sub-pixel e divisores ultra-finos para um visual "luxury tech".
- **🌊 Nano Banana Motion:** Orquestração de animações fluidas com Framer Motion, incluindo efeitos de Glow Radial e Staggered Entrance.
- **🌫️ Glassmorphism 2.0:** Uso avançado de `backdrop-filter` e opacidades graduais para profundidade imersiva.
- **📱 Responsive by Default:** Design adaptável para Mobile, Tablet e Desktop mantendo o impacto visual.
- **🛠️ Modular Architecture:** Construído com o padrão **Atomic Design**, facilitando a customização e expansão do kit.

---

## 🛠️ Tech Stack

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Styles:** Vanilla CSS Modules (para controle total de renderização)
- **Typography:** General Sans (Fontshare)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm ou yarn

### Installation
1. Clone o repositório:
   ```bash
   git clone https://github.com/ssnowzx/dribbble.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

---

## 📂 Project Structure

```text
src/
├── assets/          # Ativos locais (Imagens, Vídeos)
├── components/
│   ├── ui/          # Átomos reutilizáveis
│   └── blocks/      # Organismos complexos (Hero, Bento, Navbar)
├── styles/
│   ├── variables.css # Tokens de Design (Cores, Bordas, Motion)
│   └── global.css    # Reset e estilos globais
└── App.tsx          # Composição da Landing Page
```

---

## 🏛️ Documentation

A inteligência técnica detalhada deste projeto está disponível no diretório `/docs`:
- [Technical Overview](./docs/architecture/technical-overview.md)
- [Animation Guide](./docs/architecture/animation-guide.md)
- [Component Map](./docs/architecture/component-map.md)
- [Project Record](./docs/architecture/project-record.md)

---

## 🤝 Contribution

Este projeto foi gerado e é mantido através do **AIOX Framework**. Para contribuir com melhorias na arquitetura ou componentes, utilize os agentes especializados:
- `@architect` para mudanças estruturais.
- `@ux-design-expert` para refinamentos visuais.
- `@dev` para implementações de features.

---
*Developed with passion for excellence. © 2026 dribbble premium.*
