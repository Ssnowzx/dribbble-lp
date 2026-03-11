# Tool Input Examples — Selection Guidance

## Purpose

Improve tool selection accuracy by providing concrete input examples for the most-used tools. When choosing which tool to use, reference these examples to match the current task to the correct tool.

## Tool Examples

### context7 — Library Documentation Lookup
Use when you need up-to-date documentation for a library or framework.
- **React docs:** `resolve-library-id("react")` then `get-library-docs` with topic "server components"
- **Supabase RLS:** `resolve-library-id("supabase")` then `get-library-docs` with topic "row level security"
- **Jest mocks:** `resolve-library-id("jest")` then `get-library-docs` with topic "mock functions"

### git — Version Control
Use for repository state, history, and branch management.
- **Check changes:** `git diff --stat` — file-level summary of uncommitted changes
- **Recent history:** `git log --oneline -10` — last 10 commits with conventional messages
- **Branch comparison:** `git diff main...HEAD --stat` — all changes since branching from main

### coderabbit — Automated Code Review
Use before commits and PRs for quality validation.
- **Pre-commit:** Run coderabbit with `--prompt-only -t uncommitted`
- **Pre-PR:** Run coderabbit with `--prompt-only --base main`

### supabase — Database Operations
Use for migrations and database management.
- **Apply migrations:** `supabase db push`
- **Check status:** `supabase migration list`

### github-cli — GitHub Operations
Use for PRs, issues, and repository management. `@devops` exclusive for push/PR.
- **Create PR:** `gh pr create --title 'feat: ...' --body '## Summary...'`
- **List issues:** `gh issue list --state open --label bug`
- **PR status:** `gh pr view 123 --json reviews,statusCheckRollup`
