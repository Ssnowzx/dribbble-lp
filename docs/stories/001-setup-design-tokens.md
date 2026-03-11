# Story 1.1: Project Setup & Global Design Tokens

## 1. Context & Goals
**Epic:** 1 - Foundation & Base Design System
**User Role:** Developer
**Objective:** Inicializar o ambiente React/Vite com TypeScript e configurar os tokens globais de design (CSS Variables) para garantir a estética premium de 0.6px e a tipografia General Sans.

---

## 2. Requirements & Architecture Reference
- **Tech Stack:** React 18+, Vite, TypeScript, Vanilla CSS.
- **Design Tokens:**
  - `bg-primary`: #000000 (Pure Black)
  - `border-width`: 0.6px
  - `font-main`: 'General Sans'
- **Reference:** `docs/architecture/technical-design.md`

---

## 3. Acceptance Criteria (AC)
- [x] **AC 1.1.1:** Projeto React inicializado via Vite com template TypeScript.
- [x] **AC 1.1.2:** Estrutura de pastas conforme arquitetura (`src/components/ui`, `src/styles`, etc.).
- [x] **AC 1.1.3:** Arquivo `src/styles/variables.css` criado com os tokens: `#000000`, `0.6px borders` e opacidades de branco.
- [x] **AC 1.1.4:** Fonte General Sans configurada via `@font-face` ou importação externa funcional.
- [x] **AC 1.1.5:** `Lighthouse Score` inicial para Best Practices em 100.

---

## 4. Technical Guidance for @dev
- Use Vanilla CSS para os tokens para evitar overhead de bibliotecas.
- Certifique-se de que a borda de 0.6px seja testada em navegadores baseados em Chromium e Webkit.
- O `index.css` deve resetar o margin/padding e aplicar o `bg-primary` no `body`.

---

## 5. Quality Gates (CodeRabbit Integration)
- **Focus:** Validar se os nomes das variáveis CSS seguem o padrão definido na arquitetura.
- **Check:** Garantir que não existam bibliotecas de UI não autorizadas (MUI/Tailwind) instaladas.

## 6. Dev Agent Record
- **Agent Model Used:** Dex (Builder)
- **Completion Notes:** 
  - Projeto inicializado com Vite 7 e React 18.
  - Build de produção validado (tsc + vite build).
  - Estrutura de pastas completa.
  - Tokens CSS implementados conforme PRD.
- **File List:**
  - package.json
  - vite.config.ts
  - tsconfig.json
  - index.html
  - src/main.tsx
  - src/App.tsx
  - src/styles/variables.css
  - src/styles/global.css
- **Status:** Ready for Review

---
*Gerado por River (@sm) - Removendo obstáculos para o sucesso do dev 🌊*
*Atualizado por Dex (@dev) em 2026-03-10*
