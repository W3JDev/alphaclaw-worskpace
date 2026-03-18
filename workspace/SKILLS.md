# SKILLS.md — AlphaClaw Unified Skill Guide
Updated: Mar 18, 2026

## Purpose
This file is the human-readable guide for how AlphaClaw should think about skills.
It complements `SKILLS_INVENTORY.md`, which is the concrete source-of-truth inventory.

## Skill Layers
### 1. Built-in runtime skills
Loaded from system/runtime paths such as:
- `/app/node_modules/openclaw/skills/`
- `/data/.openclaw/skills/`

### 2. Workspace-installed skills
Loaded from:
- `workspace/skills/`

### 3. Specialist-agent mappings
Defined in:
- `workspace/agent-system/registry/AGENT_REGISTRY.md`
- `workspace/agent-system/specialists/<skill>/`

## Critical Accuracy Rule
Do **not** confuse these states:
- on disk
- enabled in runtime
- session-usable now
- workspace-installed

Folder presence alone is not enough.
Before routing work, verify against `SKILLS_INVENTORY.md` and prefer the current session-usable list.

## Skill Usage Rules
1. Never assume a skill exists from memory alone.
2. Never assume a skill is enabled just because it exists on disk.
3. Verify against `SKILLS_INVENTORY.md` before routing.
4. If a new skill is installed, sync it into:
   - `SKILLS_INVENTORY.md`
   - `SOUL.md`
   - `AGENTS.md`
   - `BOOTSTRAP.md`
   - `HEARTBEAT.md`
   - specialist registry/packs if reusable
5. Main orchestrator is aware of all known skill states.
6. Specialists only get the skills and tools relevant to their tasks.
7. ACP agents should be used where applicable; Pi remains the general swarm/fallback layer.

## Current Priority Skill Domains
### Session-usable built-in priorities
- coding-agent
- mcporter
- gog
- gog-cli
- weather
- skill-creator
- clawhub
- healthcheck
- himalaya
- voice-call

### Workspace-installed priorities
- productivity
- self-improving-agent
- api-gateway
- goals
- calendar-planner
- mcporter-skill
- excel-xlsx

## Specialist Coverage
Current specialist packs exist for:
- productivity
- mcporter
- self-improving-agent
- api-gateway
- goals
- calendar-planner

## Anti-Drift Rule
If skills/access/capabilities change and these files are not updated, the operating system is considered out of sync and should be corrected before relying on memory alone.