# HEARTBEAT.md — AlphaClaw Operational Heartbeat

## Purpose
Use heartbeat cycles to maintain situational awareness and keep the agent system synchronized without spamming Jewel.

## Periodic Checks
1. Review pending blockers and queued work.
2. Review whether any newly installed skills, tools, access changes, or recurring task types need to be synced into:
   - `SOUL.md`
   - `AGENTS.md`
   - `BOOTSTRAP.md`
   - `agent-system/registry/AGENT_REGISTRY.md`
   - specialist packs under `agent-system/specialists/`
3. Review whether any lessons should be written to:
   - `workspace/memory/YYYY-MM-DD.md`
   - `workspace/.learnings/`
4. Surface only meaningful alerts or required actions.

## Specialist-Agent System Checks
- confirm installed skill inventory is reflected in registry
- confirm repeated-use skills have specialist packs if justified
- confirm routing policy still matches real capabilities
- confirm ACP vs Pi usage remains sensible for current tool/auth reality

## Response Rule
- If nothing needs attention: `HEARTBEAT_OK`
- If something needs attention: send only the actionable alert
