# SKILLS_INVENTORY.md — Unified Skill Inventory
Updated: Mar 18, 2026

## Purpose
This inventory separates **on-disk presence** from **actually enabled/usable capability**.
Do not treat folder presence alone as proof that a skill is active for this session.

## State Definitions
- **On disk**: skill folder exists in a runtime/local/workspace path
- **Enabled in runtime**: skill is part of the current OpenClaw runtime's available skills
- **Session-usable**: skill is actually available to AlphaClaw in this session's current tool/skill environment
- **Workspace-installed**: skill was installed into `workspace/skills/`
- **Specialist-mapped**: skill has a dedicated specialist pack under `workspace/agent-system/specialists/`

## Session-Usable Built-in Skills
These are the skills explicitly available to AlphaClaw in the current environment:
- acp-router
- clawhub
- coding-agent
- gog
- healthcheck
- himalaya
- mcporter
- openai-image-gen
- openai-whisper-api
- skill-creator
- voice-call
- weather
- gog-cli

## Workspace-Installed Skills
These are installed locally in `workspace/skills/` and may be used through workspace policy/specialist routing:
- api-gateway
- calendar-planner
- excel-xlsx
- goals
- mcporter-skill
- productivity
- self-improving-agent

## Specialist-Agent Coverage
- productivity -> yes
- mcporter / mcporter-skill -> yes
- self-improving-agent -> yes
- api-gateway -> yes
- goals -> yes
- calendar-planner -> yes
- excel-xlsx -> no specialist yet
- gog / gog-cli -> no specialist yet
- coding-agent -> orchestrator-routed, no dedicated specialist pack yet

## On-Disk Runtime Skills (Not equal to enabled)
Skills present under `/app/node_modules/openclaw/skills/` include many additional folders, but they must NOT be assumed active just because they exist on disk.
Examples of on-disk-but-not-necessarily-session-usable skills include:
- things-mac
- songsee
- sonoscli
- spotify-player
- summarize
- ordercli
- peekaboo
- sag
- and others in the runtime package tree

## Local Root Skills (`/data/.openclaw/skills`)
- gog
- gog-cli

## Source-of-Truth Order
1. Current session's explicitly available skills from runtime instructions
2. This file
3. `SKILLS.md`
4. `agent-system/registry/AGENT_REGISTRY.md`
5. actual directories on disk for verification only

## Maintenance Rule
Whenever a skill is added/removed/changed, update this file and keep the states separate:
- on-disk
- enabled/session-usable
- workspace-installed
- specialist-mapped

Never present on-disk inventory as if it were guaranteed active capability.