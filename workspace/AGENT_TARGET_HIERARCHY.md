# Target Command Hierarchy & Agent Review Matrix

## Command Hierarchy

### Level 0 — CEO / Root Agent
- Final authority over all operations
- Routes work to appropriate layers
- Approves high‑impact actions
- Monitors all agents for health and compliance
- Receives summary reports, exceptions, and risk alerts

### Level 1 — Executive Control Layer
#### COO Agent
- Operations orchestrator
- Task routing across functional teams
- Recurring workflow tracking (daily, weekly, bi‑weekly)
- KPI and stuck‑items review
#### Chief of Staff Agent
- Meeting synthesis and executive briefing
- Priority alignment across departments
- Follow‑up enforcement and escalation coordination
#### Audit / Truth Agent
- Validates all outputs for citations and confidence scores
- Enforces structured output schema
- Blocks hallucinated or low‑confidence actions
- Maintains source‑of‑truth registry

### Level 2 — Functional Agents
- **Sales Ops**
- **Marketing / Content**
- **Customer Support**
- **Research / Intel**
- **DevOps / Engineering**
- **Knowledge / Memory**
- **Meeting Observer**
- **Workflow Builder**

### Level 3 — Tool / Trigger Workers
- Gmail / Calendar / Drive / Docs / Sheets integrations
- Apps Script workers
- GitHub / repository workers
- CRM / Airtable / database workers
- Meeting transcript processors
- File watcher / event handlers

---

## Refined Agent Review Matrix

| Agent | Current Role | Recommendation |
|-------|--------------|----------------|
| root / Mr. J | CEO / command authority | **Keep** – core authority, no changes |
| Maya | COO | **Keep but harden** – strengthen approval gates and publish schema |
| Zara | Functional (unspecified) | **Keep** |
| Rina | Functional (unspecified) | **Keep** |
| Kai | Functional (unspecified) | **Keep** |
| Nova | Functional (unspecified) | **Keep** |
| Rex | Functional (unspecified) | **Keep** |
| Echo | Functional (unspecified) | **Keep** |
| Atlas | Functional (unspecified) | **Keep** |
| Council | Governance | **Keep** |
| Luna | Functional (unspecified) | **Keep but harden** – reinforce memory & truth rules |
| Dani | Functional (unspecified) | **Keep but harden** – enforce publish schema & proof |
| Lia | Functional (unspecified) | **Keep but harden** – enforce send schema & attribution |
| Sam / Aria | Support / triage | **Keep but harden** – formalize triage & escalation contracts |
| local/OpsMaster | Runtime orchestration | **Keep but refactor** – convert to explicit platform template layer |
| (Other unnamed functional agents) | Various | **Do not retire yet** – no redundancy identified |

*The matrix reflects the initial audit findings and the recommended next steps: standardize contracts, harden truth/validation layers, and build a portable client‑template foundation.*

--- 

Next steps (Phase 1A continuation):
1. Conduct a live runtime verification of all scheduled agents.  
2. Produce a detailed keep / refactor / merge / retire matrix per the table above.  
3. Define the universal output schema and approval‑gate specifications.  
4. Begin portable template refactoring.
