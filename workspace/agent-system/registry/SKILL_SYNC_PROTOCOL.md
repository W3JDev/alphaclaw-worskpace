# Skill / Capability Sync Protocol

## Goal
Ensure new skills, tools, access patterns, and recurring task types are automatically absorbed into the operating model instead of being forgotten.

## Trigger Events
Run this sync logic whenever any of these happen:
- a new skill is installed
- a skill is removed or replaced
- a new tool/access path becomes available
- a recurring task pattern appears
- a new specialist is needed

## Sync Steps
1. Inspect the skill or capability.
2. Decide whether it is:
   - reference-only
   - directly used by orchestrator
   - worth a dedicated specialist pack
3. Update:
   - `SOUL.md` -> high-level capability/identity model
   - `AGENTS.md` -> workflow/routing/tool policy
   - `BOOTSTRAP.md` -> startup checks
   - `HEARTBEAT.md` -> periodic sync checks
   - `AGENT_REGISTRY.md` -> specialist inventory
4. If repeated-use:
   - create/update specialist folder under `agent-system/specialists/<skill>/`
   - define BOOTSTRAP / SOUL / MEMORY / HEARTBEAT
5. If the skill changes operating behavior, add or update:
   - dispatch policy
   - templates
   - learnings
6. Commit the change so it persists.

## Specialist Creation Rule
Create a dedicated specialist when at least one is true:
- the skill will be reused
- the skill has unique risks or setup
- the skill benefits from custom memory/heartbeat/rules
- minimal tool scoping matters

## Current Specialist Coverage
- productivity
- mcporter
- self-improving-agent
- api-gateway

## Pending Specialist Candidates
- goals
- calendar-planner
