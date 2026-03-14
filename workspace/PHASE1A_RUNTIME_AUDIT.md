# PHASE1A_RUNTIME_AUDIT

## Scope
Audit of actual runtime/config artifacts from `bijou-ai-core`.

## Files inspected
- `scripts/openclaw.json`
- `scripts/ecosystem.config.js`
- `.github/workflows/deploy.yml`
- `workspace/POLICY.md`
- `workspace/VALIDATION.md`
- `workspace/AGENTS.md`
- `agents/root/SOUL.md`
- `agents/maya/SOUL.md`
- `agents/echo/SOUL.md`

## Verified facts
### Runtime scheduling is real in config
The architecture is not documentation-only. The following schedules are explicitly present in `scripts/openclaw.json`:
- Zara — 08:00 daily
- Kai — 09:30 daily
- Nova — every 4h
- Maya — 07:00 and 17:00 daily
- Rina — 09:00 and 14:00 daily
- Dani — 11:00 daily
- Lia — 10:30 daily
- Rex — 10:00 and 16:00 daily
- Luna — 23:00 daily
- Atlas — 07:10 daily
- Echo — every 2h

### Unscheduled / on-demand agents
- root
- council
- local/OpsMaster
- Sam
- Aria

### Truth and human-in-loop controls exist already
`workspace/POLICY.md` and `workspace/VALIDATION.md` are substantial and useful. They already define:
- G0/G1/G2/G3 approval gates
- forbidden actions
- circuit breakers
- validation tiers for publish/send/db/deploy flows

### Deployment model is production-oriented
- PM2 process manager
- GitHub Actions SSH deploy
- Hetzner VPS target
- strong environment-variable usage

## Risks / gaps confirmed
### 1. Portable template gap
The repo is still strongly tied to a specific deployment model:
- Hetzner
- PM2
- fixed paths under `/home/deploy`
- fixed external services and MCP server assumptions

### 2. Tooling portability gap
OpenClaw config depends on a large MCP stack and specific env vars. This is powerful for one deployment, but too heavy as a default client template.

### 3. Runtime truth still partly unverified
The config contains schedules, but this audit has NOT yet proved all agents are successfully running in production right now. We verified config presence, not live execution logs.

### 4. Output standardization gap
Agents have good role definitions, but there is not yet one enforced universal output schema across the whole system.

### 5. Meeting automation gap
Meeting observer / transcript-to-actions flow is not yet a first-class architecture layer.

## Keep / Refactor / Merge / Retire (initial)
### Keep
- root / Mr. J
- Maya
- Zara
- Rina
- Kai
- Nova
- Rex
- Echo
- Atlas
- Council

### Keep but harden / refactor
- Luna — strengthen memory + truth distillation rules
- Dani — enforce publish schema + approval proof
- Lia — enforce send schema + attribution + unsubscribe logic
- Sam / Aria — formalize support triage/escalation contracts
- local/OpsMaster — convert into explicit platform/runtime template layer

### Do not retire yet
No agent currently looks redundant enough to remove before full live/runtime verification.

## Recommendation
Do NOT rebuild the agent roster.
Refactor around it:
1. standard agent contract
2. portable template layer
3. meeting intelligence layer
4. universal truth/output schema
5. live runtime verification and monitoring
