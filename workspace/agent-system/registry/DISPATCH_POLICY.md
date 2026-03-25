# Dispatch Policy

## Routing
- ACP agents: coding-heavy, harness-native, large implementation tasks
- Pi specialists: planning, research, operations, structured execution, fallback work
- Main orchestrator: final review, multi-agent coordination, user updates

## Minimal Tool Principle
- Each specialist receives only the tools needed for the task.
- If extra tools are needed, grant them per task/session, not permanently.

## Review Gate
- No specialist result is considered final until reviewed against acceptance criteria.

## Learning Loop
- Specialist mistakes, blockers, and corrections should be logged via the self-improvement flow.
- Repeated patterns should be promoted to SOUL.md / AGENTS.md / TOOLS.md when broadly useful.

## Antfarm Dispatch Rule
When task_type = "code" | "feature" | "PR" | "refactor" | "build":
  Run: antfarm workflow run feature-dev "<task>"
  Wait for: STATUS: done

## Bold Business Team (NDA - Isolated)
"Bold Amplify" | "RAG pipeline" | "LangGraph" | "AWS EC2" → bold-amplify-specialist
"Zara" | "recruiting" | "candidate" → zara-specialist
"Brio" | "CEO agent" | "executive briefing" → brio-specialist
