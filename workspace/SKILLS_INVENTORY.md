# SKILLS_INVENTORY.md — Unified Skill Inventory
Updated: Mar 18, 2026

## Built-in Runtime Skills (`/app/node_modules/openclaw/skills`)
- 1password
- apple-notes
- apple-reminders
- bear-notes
- blogwatcher
- blucli
- bluebubbles
- camsnap
- canvas
- clawhub
- coding-agent
- discord
- eightctl
- gemini
- gh-issues
- gifgrep
- github
- gog
- goplaces
- healthcheck
- himalaya
- imsg
- mcporter
- model-usage
- nano-banana-pro
- nano-pdf
- node-connect
- notion
- obsidian
- openai-image-gen
- openai-whisper
- openai-whisper-api
- openhue
- oracle
- ordercli
- peekaboo
- sag
- session-logs
- sherpa-onnx-tts
- skill-creator
- slack
- songsee
- sonoscli
- spotify-player
- summarize
- things-mac
- tmux
- trello
- video-frames
- voice-call
- wacli
- weather
- xurl

## Local Root Skills (`/data/.openclaw/skills`)
- gog
- gog-cli

## Workspace-Installed Skills (`workspace/skills`)
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
- coding-agent -> no specialist pack yet (handled by orchestrator + ACP routing)

## Source-of-Truth Order
1. This file
2. `SKILLS.md`
3. `agent-system/registry/AGENT_REGISTRY.md`
4. actual skill directories

## Maintenance Rule
Whenever a skill is added/removed/changed, update this file and then sync core control files + specialist packs.