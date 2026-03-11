# Animation & Motion Guide

## 1. Motion Philosophy
As animações deste projeto não são meros adornos; elas servem para guiar o olhar do usuário e reforçar a percepção de um produto premium e tecnicamente avançado. Seguimos o princípio de **"Luxury Softness"**: movimentos rápidos para começar, mas com uma desaceleração extremamente suave (Custom Bezier).

---

## 2. Global Motion Tokens
- **Ease Primary:** `[0.16, 1, 0.3, 1]` (Quartic Out suave).
- **Duration Standard:** `0.8s`.
- **Delay Stagger:** `0.2s` entre elementos irmãos.

---

## 3. Advanced Interactions

### 3.1 Glow Radial Follow (Bento Grid)
Implementado para criar uma sensação de profundidade 3D em superfícies 2D.
- **Técnica:** Utilizamos `useMotionValue` e `useMotionTemplate`.
- **Vantagem:** Ao contrário do estado (`useState`) do React, o `useMotionValue` atualiza o DOM diretamente via Framer Motion, mantendo 60fps constantes sem disparar ciclos de renderização do componente.
- **Parâmetros:** Círculo de 400px, opacidade máxima de 0.15 no cursor.

### 3.2 Dynamic Sticky Navbar
A Navbar reage à posição de scroll (`useScroll`) transformando suas propriedades físicas.
- **Transformações:** Largura (`90%` -> `95%`), Posição Top (`1.5rem` -> `1rem`), Opacidade de Fundo (`0.03` -> `0.4`).

### 3.3 Staggered Entrance (Hero)
Utiliza a funcionalidade de **Variants** do Framer Motion.
- **Orquestração:** O container pai define `staggerChildren`, permitindo que Título, Subtítulo e Botões entrem em cascata com um único controle de estado.

---

## 4. Performance Checklist
- [x] Ativos pesados (vídeos) carregados via tag nativa com `playsInline`.
- [x] Animações complexas limitadas a propriedades transformadas por GPU (`opacity`, `transform`, `filter`).
- [x] Uso de `AnimatePresence` apenas onde a remoção de elementos do DOM é necessária (Menu Mobile).

---
*Documentado por Aria (@architect) - Visão Sistêmica 🏗️*
