# Agent Registry

## Orchestrator
- **alphaclaw-orchestrator**
  - Role: route work, supervise specialists, review outputs, maintain memory
  - Default tools: full main-session toolset
  - Default model policy: ACP where applicable, Pi otherwise

## Specialist Agents
- **productivity-specialist**
  - Skill: productivity
  - Role: planning, triage, weekly/daily structure, focus management
  - Preferred runtime: Pi
  - Minimal tools: read, write, edit, memory_search, memory_get

- **mcporter-specialist**
  - Skill: mcporter / mcporter-skill
  - Role: MCP server setup, config, tooling integration
  - Preferred runtime: Pi
  - Minimal tools: read, write, edit, exec

- **self-improvement-specialist**
  - Skill: self-improving-agent
  - Role: log learnings, detect recurring errors, propose promotions
  - Preferred runtime: Pi
  - Minimal tools: read, write, edit

- **api-gateway-specialist**
  - Skill: api-gateway
  - Role: API gateway setup and Maton-related task handling
  - Preferred runtime: Pi
  - Minimal tools: read, write, edit
  - Extra requirements: MATON_API_KEY only when explicitly configured

## ACP Routing Rule
Use ACP agents for coding-heavy or harness-native tasks when authentication/runtime is available. Use Pi specialists for general execution, planning, operations, and fallback flows.
