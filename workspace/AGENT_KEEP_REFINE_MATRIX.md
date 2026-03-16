# Phase 1A – Keep / Refine / Merge / Retire Matrix

## Summary
Based on the Phase 1A runtime‑audit findings, the following recommendations are made. The matrix reflects **provisional** decisions pending final live‑runtime verification of each scheduled agent. Verification logs are required before any “Retire” or “Merge” actions are executed.

| Agent | Current Role | Recommendation | Rationale |
|-------|--------------|----------------|-----------|
| **root / Mr. J** | CEO / command authority | **Keep** (no change) | Core governance and final‑approval authority. |
| **Maya** | COO | **Keep but hardening** | Needs stricter publish‑schema & approval‑gate enforcement. |
| **Zara** | Scheduled (08:00) | **Keep** | Proven schedule; no identified issues yet. |
| **Rina** | Scheduled (09:00/14:00) | **Keep** | No issues identified. |
| **Kai** | Scheduled (09:30) | **Keep** | No issues identified. |
| **Nova** | Scheduled (every 4 h) | **Keep** | No issues identified. |
| **Rex** | Scheduled (10:00/16:00) | **Keep** | No issues identified. |
| **Echo** | Scheduled (every 2 h) | **Keep** | No issues identified. |
| **Atlas** | Scheduled (07:10) | **Keep** | No issues identified. |
| **Council** | Governance / oversight | **Keep** | Governance structure remains essential. |
| **Luna** | Scheduled (23:00) | **Keep but hardening** | Memory & truth‑distillation rules require reinforcement. |
| **Dani** | Scheduled (11:00) | **Keep but hardening** | Publish schema & proof mechanisms need formal enforcement. |
| **Lia** | Scheduled (10:30) | **Keep but hardening** | Send schema, attribution & unsubscribe logic require tightening. |
| **Sam / Aria** | Support / triage | **Keep but hardening** | Triage & escalation contracts must be formalized. |
| **local/OpsMaster** | Runtime orchestration | **Refactor** | Convert to explicit platform/template layer to improve portability. |
| **(Other unnamed functional agents)** | Various | **Do not retire** | No redundancy identified; keep pending verification. |

### Next Steps
1. **Live Runtime Verification** – Capture PM2 / process logs for each scheduled agent to confirm active execution.  
2. **Finalize Keep/Refactor/Merge/Retry decisions** – Use verification results to move any “Refactor” items to “Merge” or “Retire” as appropriate.  
3. **Implement Universal Output Schema** – Define a JSON‑Schema contract for all agent responses and update `TRUTH_GUARDRAILS.md` accordingly.  
4. **Build Meeting‑Observer → Action pipeline** – Ingest transcripts, extract key points, auto‑assign owners, and trigger follow‑up tasks.  
5. **Begin Portable Template Refactoring** – Isolate infrastructure‑specific config (Hetzner, PM2, fixed paths) into reusable variables for client cloning.

> **Note:** Until live execution logs are collected, the above matrix remains provisional. Verification will be the gate before any “Retire” or “Merge” actions are performed.