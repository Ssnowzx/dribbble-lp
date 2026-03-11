# Technical Overview - Dribbble Premium UI Kit

## 1. Executive Architecture
O projeto **dribbble** foi construído sob uma arquitetura de frontend modular, focada em performance extrema e fidelidade visual sub-pixel (0.6px). A escolha do framework recaiu sobre o ecossistema React 18 com Vite, garantindo tempos de build rápidos e uma experiência de desenvolvimento (DX) superior.

---

## 2. Core Stack
| Camada | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Framework** | React 18 (Vite) | Renderização eficiente e suporte a Fast Refresh. |
| **Linguagem** | TypeScript | Garantia de tipos para componentes e props de animação. |
| **Estilização** | Vanilla CSS Modules | Controle total sobre propriedades físicas (0.6px) e performance. |
| **Animações** | Framer Motion | Orquestração de micro-interações e estados dinâmicos (Glow Radial). |
| **Ícones** | Lucide React | Biblioteca leve e consistente com a estética tech. |

---

## 3. Architectural Decisions
- **Estética 0.6px:** Todas as bordas e divisores utilizam o token `--border-width: 0.6px`. Isso exige telas de alta densidade (Retina) para renderização perfeita, mas confere o aspecto "premium" exigido.
- **Glassmorphism 2.0:** Implementação de `backdrop-filter` com opacidades extremamente baixas (3-5%) para criar profundidade sem poluição visual.
- **Performance-First Motion:** Uso de `useMotionValue` para capturar a posição do mouse no Bento Grid, evitando ciclos de re-renderização do React durante o movimento.

---

## 4. Directory Structure (AIOX Pattern)
- `/src/components/ui`: Componentes atômicos reutilizáveis.
- `/src/components/blocks`: Organismos complexos (Hero, Navbar, BentoGrid).
- `/src/styles`: Centralização de tokens globais e variáveis de design.
- `/public`: Ativos estáticos de alta performance (Vídeos).

---
*Documentado por Aria (@architect) - Visão Sistêmica 🏗️*
