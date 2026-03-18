# Activation States
Updated: Mar 18, 2026

## State Model
### 1. Inventoried
- skill is listed in `SKILLS_INVENTORY.md`

### 2. Classified
- skill is categorized as:
  - session-usable built-in
  - workspace-installed
  - on-disk only

### 3. Specialist-Ready
- specialist pack exists with:
  - `AGENTS.md`
  - `BOOTSTRAP.md`
  - `SOUL.md`
  - `MEMORY.md`
  - `HEARTBEAT.md`
  - `SKILLS.md`
  - `TOOLS.md`

### 4. Dispatch-Ready
- runtime definition exists under `agent-system/runtime/`
- task-pack template exists
- routing policy exists

### 5. Runtime-Live
- actual tool/runtime/auth path has been verified for live execution

## Rule
Never call a skill "fully activated" unless it is at least Dispatch-Ready, and only call it Runtime-Live after verification.