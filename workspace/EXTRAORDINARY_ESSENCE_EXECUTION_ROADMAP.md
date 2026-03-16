# Extraordinary Essence — Validated Execution Roadmap

## Mission
Turn the existing `extraordinary-essence` Railway stack into a **production-worthy, monetizable, high-productivity collaborative AI workspace** without unnecessary rebuilds.

This roadmap is based on the current observed stack:
- `superagent`
- `openclaw-railway-template`
- `workspace-manager`
- `code-server`
- `Postgres`
- `Redis`
- support/helper services

---

# 1. Executive Summary

## Strategic conclusion
This project should be treated as a **refactor + hardening + consolidation program**, not a greenfield rewrite.

## Product target
The final system should function as:
- a collaborative AI workspace
- a web app you and I can use together
- a monetizable SaaS/operator platform
- a safe, auditable, extensible agentic operating environment

## Core business outcomes
The finished workspace must:
- support real daily work
- reduce operational friction
- centralize AI/chat/workspace/task workflows
- enable repeatable delivery and revenue
- be secure enough for serious production use

---

# 2. Grounded Current-State Assessment

## Keep as core platform
- `openclaw-railway-template`
- `superagent`
- `Postgres`
- `Redis`
- `code-server`

## Keep but refactor heavily
- `workspace-manager`

## Keep but reorganize/convert
- `security-audit`
- `security-policy`
- `database-backup`

## Likely merge/retire as services
- `deployment-guide`
- `integration-guide`
- `skills-installer`

## Highest known risk
`workspace-manager` currently appears to expose file/code/git operations too directly and should be treated as the first major hardening target.

---

# 3. Delivery Principles

## Operating rules
1. **No blind rebuilds**
2. **Inspect before changing**
3. **Sequence work by risk and leverage**
4. **Every phase must be testable**
5. **Every major change must be validated**
6. **Security and maintainability beat speed hacks**
7. **Only keep services that earn their existence**
8. **Separate scaffold/demo logic from durable product code**

## Quality bar
Every implementation phase must include:
- architecture intent
- scope boundaries
- acceptance criteria
- validation checks
- rollback/containment thinking

---

# 4. Phase Sequence

## Phase 0 — Control, visibility, and delivery discipline
**Goal:** establish clear execution control before deep changes.

### Deliverables
- [ ] roadmap approved and tracked
- [ ] phase tracker created
- [ ] risk register created
- [ ] validation checklist created
- [ ] service inventory frozen
- [ ] workstream ownership defined (AI/operator side)

### Validation
- [ ] roadmap reflects current stack truthfully
- [ ] no active phase starts without acceptance criteria
- [ ] all future work ties back to this roadmap

---

## Phase 1 — Architecture classification and boundary definition
**Goal:** define what each service is allowed to do, and where responsibilities belong.

### Work items
- [ ] map `superagent` responsibilities
- [ ] map `openclaw-railway-template` responsibilities
- [ ] map `workspace-manager` responsibilities
- [ ] map current persistence responsibilities (Postgres / Redis / storage)
- [ ] classify helper services as keep / merge / retire
- [ ] define target service boundaries
- [ ] identify anti-patterns and duplicated concerns

### Acceptance criteria
- [ ] every service has a defined role
- [ ] no critical responsibility is ambiguous
- [ ] helper/scaffold services are clearly classified

### Validation
- [ ] service map reviewed against actual deployment findings
- [ ] no target architecture assumption contradicts observed stack behavior

---

## Phase 2 — Security and runtime hardening
**Goal:** eliminate the biggest architectural and operational risks.

### Highest-priority focus
- [ ] harden `workspace-manager`

### `workspace-manager` hardening checklist
- [ ] define allowed API surface explicitly
- [ ] remove or isolate raw arbitrary execution paths
- [ ] gate file operations by scoped workspace rules
- [ ] gate git operations by approved repository/worktree policy
- [ ] add auth + authorization checks
- [ ] add audit logging for every mutation path
- [ ] define input validation and output schema
- [ ] separate sync request handling from long-running execution
- [ ] move risky tasks to queue/worker flow where needed

### Platform hardening checklist
- [ ] review service-to-service trust boundaries
- [ ] verify secret/env ownership and separation
- [ ] confirm public vs internal service exposure
- [ ] validate object storage access boundaries
- [ ] verify backup path correctness
- [ ] define minimum security baseline for all app services

### Acceptance criteria
- [ ] `workspace-manager` no longer behaves like an unsafe prototype tool surface
- [ ] all sensitive mutation paths are authenticated and auditable
- [ ] execution is constrained and policy-driven

### Validation
- [ ] endpoint review complete
- [ ] abuse cases documented and reduced
- [ ] manual negative-path checks pass

---

## Phase 3 — Persistence and domain model completion
**Goal:** make the workspace actually durable, collaborative, and product-grade.

### Work items
- [ ] define core domain entities
- [ ] define durable storage model in Postgres
- [ ] define ephemeral/cache usage in Redis
- [ ] define file metadata model
- [ ] define attachment/object storage mapping
- [ ] define audit/event model
- [ ] define project/task/workspace/session relationships

### Recommended domain entities
- [ ] users
- [ ] workspaces
- [ ] projects
- [ ] sessions / chats
- [ ] files
- [ ] tasks
- [ ] runs / jobs
- [ ] skills
- [ ] audit events
- [ ] uploads / assets

### Acceptance criteria
- [ ] product state is not dependent on local-only filesystem assumptions
- [ ] collaboration-critical state is durable
- [ ] file and asset references are first-class and traceable

### Validation
- [ ] schema reviewed for real product needs
- [ ] migrations plan defined
- [ ] data ownership per service is explicit

---

## Phase 4 — Frontend-to-runtime workflow integrity
**Goal:** ensure the UI actually drives reliable backend and agent behavior.

### Work items
- [ ] verify `superagent` session flow
- [ ] verify model selection flow
- [ ] verify file upload flow
- [ ] verify workspace file browsing/editing flow
- [ ] verify task/cron/skills/admin pages against real backend behavior
- [ ] verify runtime handoff to OpenClaw
- [ ] verify failure/error handling UX
- [ ] define missing user flows

### Required product flows to validate
- [ ] start a chat
- [ ] continue a session
- [ ] upload a file
- [ ] store and retrieve file metadata
- [ ] generate and access hosted file link
- [ ] invoke workspace operation safely
- [ ] run scheduled task
- [ ] inspect usage/admin data

### Acceptance criteria
- [ ] no core workflow is “UI-only” without real backend support
- [ ] user-facing features map to real persisted behavior
- [ ] failed workflows degrade clearly, not silently

### Validation
- [ ] test script for each major workflow
- [ ] expected request/response map documented

---

## Phase 5 — Service consolidation and simplification
**Goal:** reduce platform sprawl and clarify the runtime.

### Work items
- [ ] merge/remove documentation-as-service components
- [ ] decide long-term fate of `skills-installer`
- [ ] convert helper Bun code-string services into proper jobs/config/docs where appropriate
- [ ] reduce Railway surface area where possible
- [ ] remove non-essential always-on services

### Acceptance criteria
- [ ] each deployed service has a justified runtime purpose
- [ ] no doc/scaffold service remains simply because it already exists
- [ ] ops burden is reduced

### Validation
- [ ] pre/post service inventory comparison
- [ ] no critical capability lost after consolidation

---

## Phase 6 — Product completion for monetization and productivity
**Goal:** make the platform commercially useful and operationally valuable.

### Product capability checklist
- [ ] reliable collaborative chat workspace
- [ ] file/image upload and hosted asset flow
- [ ] project/task tracking inside workspace
- [ ] durable memory/context surfaces
- [ ] admin/usage clarity
- [ ] onboarding and workspace initialization flow
- [ ] monetizable plan boundaries/features
- [ ] production-ready observability and support surfaces

### Monetization-oriented deliverables
- [ ] define core offer
- [ ] define free/pro/max boundaries realistically
- [ ] identify premium features that are truly enforceable
- [ ] define admin and billing behavior expectations
- [ ] define client-facing readiness checklist

### Productivity-oriented deliverables
- [ ] unify chat, files, tasks, and execution loops
- [ ] minimize context switching
- [ ] reduce operator friction
- [ ] make outputs exportable and reusable

### Acceptance criteria
- [ ] platform can support meaningful daily operator workflows
- [ ] platform has a clear path to charging for value
- [ ] collaboration is real, not superficial

---

## Phase 7 — QA, validation, and release readiness
**Goal:** verify the system actually works as a serious product.

### Validation tracks
- [ ] architecture review
- [ ] endpoint review
- [ ] security review
- [ ] workflow review
- [ ] regression checks
- [ ] persistence checks
- [ ] scheduling checks
- [ ] backup/recovery checks

### Test categories
#### Functional tests
- [ ] chat/session creation
- [ ] session persistence
- [ ] file upload/download
- [ ] workspace CRUD
- [ ] skill visibility and invocation
- [ ] scheduled task creation and execution
- [ ] admin/usage pages load correctly

#### Security tests
- [ ] unauthorized mutation rejection
- [ ] path traversal / workspace escape prevention
- [ ] command execution abuse prevention
- [ ] storage access policy review
- [ ] secret leakage review

#### Product tests
- [ ] new user onboarding path
- [ ] operator daily workflow path
- [ ] collaborative handoff path
- [ ] monetizable feature gating sanity check

### Release criteria
- [ ] core workflows pass
- [ ] critical risks mitigated
- [ ] service sprawl reduced
- [ ] validation evidence captured
- [ ] rollback/containment options understood

---

# 5. Workstream Tracker

## Workstream A — Architecture
- [ ] service classification complete
- [ ] target architecture map complete
- [ ] boundary definitions complete

## Workstream B — Security / Hardening
- [ ] workspace-manager review complete
- [ ] authz model reviewed
- [ ] audit model reviewed
- [ ] execution safety model reviewed

## Workstream C — Data / Persistence
- [ ] entity model defined
- [ ] schema plan defined
- [ ] file/storage model defined

## Workstream D — Frontend / UX integrity
- [ ] workflow mapping complete
- [ ] broken or fake flows identified
- [ ] missing flows prioritized

## Workstream E — Platform consolidation
- [ ] helper services classified
- [ ] merge/retire candidates approved
- [ ] simplification plan ready

## Workstream F — Monetization / productivity
- [ ] monetization model reviewed
- [ ] value-delivery workflows identified
- [ ] product-grade workspace priorities approved

## Workstream G — Validation / QA
- [ ] test plan created
- [ ] acceptance checks defined
- [ ] evidence capture plan defined

---

# 6. Immediate Execution Order

## Do first
1. [ ] finish service boundary map
2. [ ] perform deeper `workspace-manager` risk review
3. [ ] inspect repo/app wiring for `superagent` / `openclaw-railway-template` / `workspace-manager`
4. [ ] produce keep/refactor/merge/retire final matrix
5. [ ] produce hardening implementation plan

## Do next
6. [ ] begin `workspace-manager` refactor plan
7. [ ] define persistence/domain model
8. [ ] validate frontend-to-backend real workflows
9. [ ] reduce scaffold/service sprawl

## Do after core hardening
10. [ ] complete product collaboration layer
11. [ ] tighten monetization/productivity surfaces
12. [ ] run full validation pass

---

# 7. What Not To Do Yet
- [ ] do not rebuild the whole platform from scratch
- [ ] do not add random new agents before service boundaries are clear
- [ ] do not expand helper-service sprawl
- [ ] do not trust current workspace execution surfaces as production-safe
- [ ] do not treat generated support services as final architecture

---

# 8. Coding-Agent Operating Model

## Execution model
- roadmap and validation driven
- coding agent works against scoped tasks
- human approval remains in control for high-impact architecture changes
- implementation outputs are reviewed against this roadmap

## Coding-agent loop
1. define scoped task
2. run coding agent on that task
3. inspect output
4. validate against roadmap + safety + architecture
5. accept / reject / refine

## Rules for coding-agent tasks
- one bounded work package at a time
- explicit acceptance criteria per task
- no uncontrolled refactor waves
- no infra-destructive changes without explicit checkpoint review

---

# 9. Final Outcome Target
The end state should be a platform that is:
- trustworthy
- secure enough for real usage
- architecturally understandable
- faster to operate
- monetizable
- extensible
- collaborative in practice, not just in marketing

This roadmap is the execution control document for getting there.
