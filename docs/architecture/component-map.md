# Component Map & Interface Hierarchy

## 1. Atomic Structure (Patterns)
Seguimos o padrão de decomposição modular para garantir que cada elemento seja independente e escalável.

### 1.1 UI Foundations (`/src/components/ui`)
*Ainda em fase de extração para o kit completo:*
- **Buttons:** Variantes Primary (Solid) e Secondary (Glass).
- **Badge:** Indicador de status com animação de pulso.
- **Typewriter:** Motor de animação de texto para blocos de código.

---

## 2. Block Organisms (`/src/components/blocks`)
Componentes de alto nível que compõem a Landing Page.

### 2.1 Navbar
- **Responsabilidades:** Navegação persistente, comportamento adaptativo ao scroll.
- **Efeitos:** `backdrop-filter: blur(12px)`, transição de largura dinâmica.

### 2.2 Hero Section
- **Responsabilidades:** Impacto visual inicial, conversão principal (CTA).
- **Efeitos:** Background de vídeo cinematográfico, overlays de gradiente 95%, animações de entrada sequenciadas (Staggered).

### 2.3 Bento Grid
- **Responsabilidades:** Exibição de features com layout assimétrico moderno.
- **Subcomponente:** `BentoCard` (Suporta imagens de fundo Nano Banana Pro e Glow Radial).
- **Efeitos:** Mouse-follow glow utilizando Framer Motion `useMotionValue`.

### 2.4 Dev Experience
- **Responsabilidades:** Prova técnica do kit através de simulação de código.
- **Efeitos:** Mockup de editor macOS, animação de digitação em tempo real.

### 2.5 Pricing & FAQ
- **Responsabilidades:** Fechamento de conversão e suporte ao usuário.
- **Efeitos:** Cards com elevação visual no hover, acordeões com animação de altura fluida.

---

## 3. Global Styling
- **`variables.css`:** Única fonte de verdade para tokens de design (cores, bordas, tempos de animação).
- **`global.css`:** Reset de sistema e aplicação de tipografia General Sans.

---
*Documentado por Aria (@architect) - Visão Sistêmica 🏗️*
