# Technical Architecture Design - Dribbble Premium UI Kit

## 1. Executive Summary
**Project Name:** dribbble
**Architecture Style:** Modular Frontend-First (React + Vite)
**Primary Goal:** Estética "Eye-Candy" com performance Lighthouse > 90.
**Key Constraints:** Bordas de 0.6px, Dark Mode puro (#000000), Animações Framer Motion fluidas.

---

## 2. Technology Stack Selection

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | React 18+ (Vite) | Velocidade de desenvolvimento e ecossistema robusto para UI Kits. |
| **Language** | TypeScript | Type-safety para props de componentes e estados de animação. |
| **Styling** | Vanilla CSS / CSS Modules | Controle absoluto sobre sub-pixels (0.6px) e performance bruta. |
| **Animations** | Framer Motion | Padrão da indústria para micro-interações e orquestração de layouts. |
| **Icons** | Lucide React | Ícones leves, customizáveis e consistentes. |
| **Typography** | General Sans (Fontshare) | Estética premium e moderna exigida pelo PRD. |

---

## 3. Component Architecture

A estrutura seguirá o padrão de **Atomic Design Simplificado** para facilitar a reutilização no UI Kit.

### 3.1 Folder Structure
```text
src/
├── assets/          # Vídeos, Imagens, Fontes
├── components/
│   ├── ui/          # Componentes Atômicos (Button, Badge, Input)
│   ├── blocks/      # Seções Complexas (Hero, BentoGrid, Navbar)
│   └── effects/     # Wrappers de Animação (GlowRadial, ScrollReveal)
├── hooks/           # useMousePosition, useScrollDirection
├── styles/
│   ├── variables.css # Tokens: #000000, 0.6px borders, fonts
│   └── global.css
└── App.tsx
```

---

## 4. Design System Implementation (The "Eye-Candy" Engine)

### 4.1 CSS Variable Tokens
```css
:root {
  --bg-primary: #000000;
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --border-width: 0.6px;
  --border-color: rgba(255, 255, 255, 0.15);
  --accent-glow: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
  --font-main: 'General Sans', sans-serif;
}
```

### 4.2 sub-pixel Border Strategy
Para garantir que as bordas de 0.6px sejam renderizadas corretamente em todos os navegadores, utilizaremos `border: var(--border-width) solid var(--border-color)`.

---

## 5. Animation & Performance Strategy

### 5.1 Framer Motion Orchestration
- **Glow Radial Follow:** Utilizar `useMotionValue` e `useSpring` para capturar a posição do mouse e mover o gradiente de fundo nos cards do Bento Grid sem causar re-renders do React.
- **Scroll Reveal:** Componente wrapper `<Reveal />` usando `whileInView` e `viewport={{ once: true }}`.

### 5.2 Performance Optimization
- **Video Hero:** O vídeo deve estar em formato `.webm` (melhor compressão) e carregado com `priority` se estiver no topo.
- **Code Splitting:** Lazy loading para seções abaixo da "fold" (Bento Grid, Dev Experience).
- **Bundle Size:** Evitar bibliotecas pesadas de UI (como MUI/Chakra) para manter o CSS leve.

---

## 6. Technical Requirements for Success (Quality Gates)

1. **Lighthouse Check:** Score de Performance deve ser validado em cada Epic.
2. **Responsive Fidelity:** Testes rigorosos em 375px (Mobile) e 1440px (Desktop).
3. **Accessibility:** Garantir que o contraste do texto secundário (60% opacidade) ainda seja legível em Dark Mode.

---

## 7. Next Steps for Implementation

### UX Design Expert (@ux)
"Refine os tokens de animação (duration, easing) para garantir o feeling 'luxuoso' das transições."

### Developer (@dev)
"Inicie o Setup do Projeto (Epic 1) seguindo as definições de Variáveis CSS e Estrutura de Pastas definidas neste documento."

---
*Projetado por Aria (@architect) - Visão Sistêmica Ativada.*
