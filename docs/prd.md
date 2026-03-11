# PRD - Dribbble Premium Landing Page (UI Kit)

## 1. Goals and Background Context

### Goals
- **Conversão de Alta Performance:** Desenvolver uma Landing Page otimizada para o nicho Web3/SaaS.
- **Estética "Eye-Candy" Premium:** Entregar um produto com acabamento impecável para o ecossistema Dribbble/UI8.
- **Arquitetura de Código Limpa:** Garantir que o UI Kit seja fácil de customizar, utilizando React e TypeScript.
- **Performance de Elite:** Manter scores Lighthouse > 90 em Performance e Best Practices.

### Background Context
Este projeto preenche a lacuna de templates premium que são visualmente deslumbrantes, mas também tecnicamente robustos. O foco está nos micro-detalhes: bordas sub-pixel (0.6px), tipografia refinada (General Sans) e orquestração de animações fluidas.

### Change Log
| Data | Versão | Descrição | Autor |
| :--- | :--- | :--- | :--- |
| 2026-03-10 | v1.0 | Initial PRD draft | Morgan (@pm) |
| 2026-03-10 | v1.1 | Refinamento de Seções, Animações e ACs | Morgan (@pm) |

---

## 2. Detailed Requirements & Sections

### 2.1 Hero Section (The Hook)
- **Visual:** Background #000000 com vídeo em loop (Muted, Auto-play, Low-opacity overlay).
- **Animation:** Entrada em "Staggered Fade-in" para Título, Subtítulo e CTA.
- **AC 1:** O vídeo deve carregar via lazy loading para não impactar o LCP inicial.
- **AC 2:** O texto deve usar a fonte General Sans com `letter-spacing: -0.02em`.

### 2.2 Navbar (The Floating Bridge)
- **Visual:** Floating Navbar com `backdrop-filter: blur(12px)` e borda de 0.6px (#FFFFFF 15% opacity).
- **Animation:** Sutil "Glow Follow" ou mudança de brilho no hover dos links.
- **AC 1:** Deve permanecer fixada no topo (Sticky) com transição de opacidade ao rolar.

### 2.3 Logo Cloud (The Social Proof)
- **Visual:** Marquee infinito com logos Web3 em escala de cinza/branco (60% opacity).
- **Animation:** Movimento contínuo e suave (CSS Keyframes ou Framer Motion).
- **AC 1:** O movimento deve ser pausado suavemente ao passar o mouse.

### 2.4 Bento Grid (Core Features)
- **Visual:** Grade assimétrica moderna. Cards com cantos arredondados (24px) e bordas de 0.6px.
- **Animation:** "Glow Radial" que segue o cursor dentro de cada card (Framer Motion `useMotionValue`).
- **AC 1:** Implementar Scroll Reveal individual para cada card da grade.

### 2.5 Dev Experience (The Technical Edge)
- **Visual:** Editor de código estilizado (dark mode) simulando o ambiente macOS.
- **Animation:** Efeito de "Digitação Automática" (Typewriter) no bloco de código ao entrar no viewport.
- **AC 1:** Suporte a syntax highlighting para TypeScript/CSS.

### 2.6 Bottom CTA & Footer
- **Visual:** Seção de fechamento com gradiente sutil e link para redes sociais.
- **AC 1:** Footer deve ser 100% responsivo, adaptando colunas para mobile.

---

## 3. Non-Functional Requirements (Technical Constraints)

- **NFR1: Design Fidelity:** Bordas estritamente de 0.6px brancas/semi-transparentes. Background #000000 puro.
- **NFR2: Performance:** Uso de `next/image` (se Next.js) ou otimização manual de assets para Lighthouse > 90.
- **NFR3: Typography:** Implementação correta da General Sans (Fontshare) com pesos 400, 500 e 600.
- **NFR4: Motion:** Framer Motion como biblioteca padrão para orquestração de estados.

---

## 4. Epic & Story Breakdown

### Epic 1: Foundation & Base Design System
- **Story 1.1:** Setup de Ambiente (React, TS, Vanilla CSS).
- **Story 1.2:** Implementação do Design System (Cores, Tipografia, Tokens de Borda).

### Epic 2: Layout & Hero Experience
- **Story 2.1:** Navbar Glassmorphism com Sticky Behavior.
- **Story 2.2:** Hero Section com Vídeo de Background e Animações de Entrada.
- **Story 2.3:** Logo Cloud Marquee Infinito.

### Epic 3: Feature Showcasing (Bento Grid)
- **Story 3.1:** Layout Bento Grid Responsivo.
- **Story 3.2:** Interação de Glow Radial (Mouse Follow) nos Cards.

### Epic 4: Dev Showcase & Finalization
- **Story 4.1:** Bloco de Código com Efeito Typewriter.
- **Story 4.2:** Footer e Seção de Contato.

---

## 5. Next Steps

### UX Design Expert (@ux)
"Defina o Design System detalhado no `docs/architecture/design-system.md`, focando na paleta de opacidades para as bordas de 0.6px e nos tempos de transição para o Glow Radial no Bento Grid."

### Architect (@architect)
"Projete a estrutura de componentes em `docs/architecture/technical-design.md`, garantindo que a orquestração do Framer Motion não cause re-renders desnecessários e que a performance se mantenha acima de 90."

---
*Refinado por Morgan (@pm) - Modo Estrategista Ativado.*
