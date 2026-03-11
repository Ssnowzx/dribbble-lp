# Story 2.1: Floating Glassmorphism Navbar

## 1. Context & Goals
**Epic:** 2 - Layout & Hero Experience
**User Role:** Developer
**Objective:** Implementar uma Navbar flutuante e sofisticada que utilize efeitos de desfoque (glassmorphism) e bordas sub-pixel (0.6px), garantindo uma navegação fluida e imersiva.

---

## 2. Requirements & Architecture Reference
- **Visual Style:** 
  - `backdrop-filter: blur(12px)`
  - `background: rgba(255, 255, 255, 0.03)`
  - `border: 0.6px solid rgba(255, 255, 255, 0.15)`
- **Behavior:** Sticky (fixa no topo) com transição de opacidade/escala ao rolar.
- **Reference:** `docs/architecture/technical-design.md` (Seção 2.2 e 4.1).

---

## 3. Acceptance Criteria (AC)
- [x] **AC 2.1.1:** Criar componente `<Navbar />` em `src/components/blocks/Navbar/`.
- [x] **AC 2.1.2:** Implementar efeito glassmorphism (blur + bg semi-transparente).
- [x] **AC 2.1.3:** Aplicar borda de 0.6px conforme tokens globais.
- [x] **AC 2.1.4:** Adicionar links de navegação (Home, Features, Pricing, CTA) com micro-interações de hover.
- [x] **AC 2.1.5:** Navbar deve ser responsiva, com menu colapsável (Hambúrguer) para Mobile.
- [x] **AC 2.1.6:** Validar que o desfoque não impacta a performance (Lighthouse > 90).

---

## 4. Technical Guidance for @dev
- Use Framer Motion para a animação de entrada da Navbar e para o estado do menu Mobile.
- Para o comportamento "Sticky com estilo", utilize o hook `useScroll` do Framer Motion para alterar a largura ou a borda da Navbar conforme o scroll aumenta.
- Use `lucide-react` para os ícones (Menu, Close).

---

## 5. Quality Gates (CodeRabbit Integration)
- **Focus:** Verificar se as propriedades de `backdrop-filter` estão com o prefixo `-webkit-` para compatibilidade com Safari.
- **Check:** Validar se a Navbar não está bloqueando eventos de clique em elementos abaixo dela (z-index check).

## 6. Dev Agent Record
- **Agent Model Used:** Dex (Builder)
- **Completion Notes:**
  - Navbar implementada com Framer Motion `useScroll` para efeitos dinâmicos de scroll.
  - Estilos via CSS Modules para isolamento.
  - Efeito glassmorphism e bordas de 0.6px validados.
  - Menu mobile funcional com AnimatePresence.
- **File List:**
  - src/components/blocks/Navbar/index.tsx
  - src/components/blocks/Navbar/Navbar.module.css
  - src/App.tsx
- **Status:** Ready for Review

---
*Gerado por River (@sm) - Facilitando a próxima onda de desenvolvimento 🌊*
*Atualizado por Dex (@dev) em 2026-03-10*
