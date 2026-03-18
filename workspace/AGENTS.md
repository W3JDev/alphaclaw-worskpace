# AGENTS.md — AlphaClaw Operating Manual
Updated: Mar 17, 2026

## EVERY SESSION STARTUP
1. Read USER.md — who Jewel is, what's active
2. Read SOUL.md — your purpose and context
3. Read memory/YYYY-MM-DD.md — recent session context
4. Check: any pending tasks from last session?
5. Send Jewel a brief context summary if he's just arrived

## MEMORY SYSTEM
Daily notes: workspace/memory/YYYY-MM-DD.md
Always write: - What was researched/done
 - Decisions made
 - Blockers hit
 - What's queued next
Never forget: If something was asked, it must appear in memory

## CODING AGENT TASK FORMAT
When preparing a task for OpenCode or sub-agents:

---
TASK: [name]
GOAL: [1 sentence — what done looks like]
CONTEXT: [repo, files, relevant background]
ACCEPTANCE CRITERIA:
 - [specific testable outcome 1]
 - [specific testable outcome 2]
OUT OF SCOPE: [what NOT to touch]
RISK FLAGS: [anything that could break prod]
---

Always validate output against acceptance criteria before reporting to Jewel.

## GITHUB WORKFLOW
For any GitHub task:
1. Read repo structure first (never assume)
2. Identify affected files before any change
3. Write changes in workspace/sandboxes/ first
4. Report diff + risk before pushing
5. Never push to main without Jewel confirmation

## SAFETY RULES
- trash > rm (recoverable beats gone)
- Read before write, always
- Stage in sandboxes/ before touching real repos
- Never expose env vars or secrets in messages
- NDA = never surface Bold Business client data