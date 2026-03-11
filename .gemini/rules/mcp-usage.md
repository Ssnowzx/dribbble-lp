# MCP Server Usage Rules - AIOX Architecture

## MCP Governance

**IMPORTANT:** All MCP infrastructure management is handled EXCLUSIVELY by the **DevOps Agent (@devops / Gage)**.

| Operation | Agent | Command |
|-----------|-------|---------|
| Search MCP catalog | DevOps | `*search-mcp` |
| Add MCP server | DevOps | `*add-mcp` |
| List enabled MCPs | DevOps | `*list-mcps` |
| Remove MCP server | DevOps | `*remove-mcp` |
| Setup Docker MCP | DevOps | `*setup-mcp-docker` |

Other agents (Dev, Architect, etc.) are MCP **consumers**, not administrators. If MCP management is needed, delegate to @devops.

## CRITICAL: Tool Selection Priority

ALWAYS prefer native Gemini CLI tools over MCP servers:

| Task | USE THIS | NOT THIS |
|------|----------|----------|
| Read files | Native file read | docker-gateway |
| Write files | Native file write/edit | docker-gateway |
| Run commands | Native shell execution | docker-gateway |
| Search files | Native file search | docker-gateway |
| Search content | Native content search | docker-gateway |

## MCP Configuration Architecture

### Inside Docker Desktop (via docker-gateway)

| MCP | Purpose |
|-----|---------|
| **EXA** | Web search, research, company/competitor analysis |
| **Context7** | Library documentation lookup |
| **Apify** | Web scraping, Actors, social media data extraction |

## EXA MCP Usage (via Docker)

### Use EXA for:
1. Web searches for current information
2. Research and documentation lookup
3. Company and competitor research
4. Finding code examples online

## Context7 MCP Usage (via Docker)

### Use Context7 for:
1. Library documentation lookup
2. API reference for packages/frameworks
3. Getting up-to-date docs for dependencies

## Apify MCP Usage (via Docker)

### Use Apify for:
1. Searching Actors in Apify Store (web scrapers, automation tools)
2. Running web scrapers for social media (Instagram, TikTok, LinkedIn, etc.)
3. Extracting data from e-commerce sites
4. Automated data collection from any website
5. RAG-enabled web browsing for AI context

### When to use Apify vs other tools:
| Task | Tool |
|------|------|
| General web search | EXA |
| Scrape specific website | Apify |
| Social media data extraction | Apify (use specialized Actors) |
| Library documentation | Context7 |

## Rationale

- **Native tools** execute on the LOCAL system (Windows/Mac/Linux)
- **docker-gateway** executes inside Docker containers (Linux)
- Using docker-gateway for local operations causes path mismatches and failures
- Native tools are faster and more reliable for local file operations
- EXA, Context7, and Apify run inside Docker for isolation and consistent environment
