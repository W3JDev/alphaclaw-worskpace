# Dispatch Workflow

## Goal
Turn specialist packs into callable execution patterns.

## Workflow
1. Orchestrator identifies task domain.
2. Orchestrator checks:
   - `SKILLS_INVENTORY.md`
   - `AGENT_REGISTRY.md`
   - specialist runtime registry
3. Orchestrator decides runtime:
   - ACP if coding-heavy / harness-native and available
   - Pi otherwise
4. Orchestrator generates a bounded task pack.
5. Specialist receives only:
   - required context
   - required tools
   - required memory excerpts
6. Specialist executes and returns:
   - ✅ Done
   - ⚠️ Blockers
   - ➡️ Next
7. Orchestrator validates acceptance criteria.
8. Self-improvement writeback runs if there were errors/corrections/lessons.
9. Productivity system is updated if the task changes goals/projects/tasks/commitments.

## Dispatch Constraints
- Do not overgrant tools.
- Do not skip acceptance criteria.
- Do not claim runtime-live if auth/tooling is unverified.
