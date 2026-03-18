# Shared Memory Protocol

## Global Rules
- Durable project/user memories live in workspace/memory/YYYY-MM-DD.md
- Specialist-specific working notes may live under agent-system/memory/specialists/
- Every completed significant task should write:
  - what was done
  - decisions made
  - blockers hit
  - what is next

## Recall Rules
- Orchestrator reads user/workspace memory before routing meaningful tasks
- Specialists read only the minimum relevant memory excerpts
- Corrections and recurring failures should also be logged in .learnings/

## Promotion Rules
- Behavioral rules -> SOUL.md
- Workflow rules -> AGENTS.md
- Tool gotchas -> TOOLS.md
