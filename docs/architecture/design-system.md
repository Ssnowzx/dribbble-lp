# Design System Specification - Dribbble Premium UI Kit

## 1. Design Philosophy
**Aesthetic:** "Luxury Tech / Glass-morphism 2.0"
O foco é o contraste entre o fundo preto puro (#000000) e elementos com alta transparência, desfoque e bordas extremamente finas (sub-pixel) de 0.6px, criando uma sensação de interface leve e sofisticada.

---

## 2. Brand Tokens

### 2.1 Color Palette
| Token | Hex/RGBA | Usage |
| :--- | :--- | :--- |
| `bg-primary` | #000000 | Fundo principal da página (Pure Black). |
| `text-primary` | #FFFFFF | Títulos e textos em destaque. |
| `text-secondary` | rgba(255, 255, 255, 0.6) | Parágrafos e labels secundárias. |
| `border-primary` | rgba(255, 255, 255, 0.15) | Bordas de cards e divisores. |
| `glass-bg` | rgba(255, 255, 255, 0.03) | Fundo de elementos com glassmorphism. |
| `accent-glow` | rgba(255, 255, 255, 0.1) | Glow radial sutil. |

### 2.2 Typography: General Sans
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold).
- **Hero Title:** `clamp(2.5rem, 8vw, 5.5rem)`, `letter-spacing: -0.04em`.
- **Bento Grid Title:** `font-size: 1.5rem`, `letter-spacing: -0.02em`.

### 2.3 Borders & Radius
- **Border Width:** `0.6px` (Fixed).
- **Border Radius:** `24px` (Cards), `12px` (Small components), `999px` (Pill buttons).

---

## 3. Visual Assets: The "Nanobanana" Hero Video

### 3.1 Background Strategy
- **File Format:** `.webm` (primário) e `.mp4` (fallback).
- **Estética:** Animação abstrata em loop com movimentos fluidos e orgânicos (fluidez estilo "nanobanana").
- **Overlay:** Gradiente de #000000 (0.7 opacity no topo/base para blend perfeito com a página).

---

## 4. Animation & Interaction Tokens

### 4.1 Global Transitions
- **Duration:** 0.8s (Entrada), 0.3s (Hover).
- **Easing:** `[0.16, 1, 0.3, 1]` (Custom Bezier para suavidade luxuosa).

### 4.2 Bento Grid Glow Radial
- **Radius:** 400px circle.
- **Motion:** Segue o cursor com suavização (Spring: stiffness 100, damping 30).
- **Opacity:** 0.15 no epicentro, degradando até 0 em 70%.

---

## 5. UI Components Guidelines

### 5.1 Glassmorphism (Navbar/Cards)
- `backdrop-filter: blur(12px)`.
- `-webkit-backdrop-filter: blur(12px)` (Necessário para Safari).
- Borda de 0.6px deve estar sempre visível para definir a silhueta.

### 5.2 Micro-interactions
- **Buttons:** Sutil aumento de brilho interno no hover + escala de 1.05.
- **Logo Cloud:** Pausa suave (fade de velocidade) no hover, não um stop seco.

---
*Especificado por Uma (@ux-design-expert) - Desenhando com Empatia 💝*
