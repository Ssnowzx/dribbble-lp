# Agent Memory Imports

Each AIOX agent has a canonical MEMORY.md containing persistent knowledge.
These are the canonical locations — agents should read their memory on activation.

Agent memory files:
- `.aiox-core/development/agents/dev/MEMORY.md`
- `.aiox-core/development/agents/qa/MEMORY.md`
- `.aiox-core/development/agents/architect/MEMORY.md`
- `.aiox-core/development/agents/devops/MEMORY.md`
- `.aiox-core/development/agents/pm/MEMORY.md`
- `.aiox-core/development/agents/po/MEMORY.md`

When activating an agent, read the corresponding MEMORY.md to restore persistent context.
