# AGENT_OS_MASTER_PLAN

## Objective
Convert the existing Bijou/OpenClaw multi-agent system into a human-in-the-loop, client-portable Business Operations Agent OS.

## Strategic Principles
- Main OpenClaw/root agent is the CEO / command authority.
- Agents are specialists, not independent decision-makers.
- All critical actions require truth checks, confidence checks, and approval gates.
- The system must work for Bijou internally first, then become a client-clonable template.

## Phase Plan
1. Audit current repo and runtime reality
2. Define target architecture and command hierarchy
3. Define recurring tasks + automation map
4. Define meeting intelligence flow
5. Build client template OS
6. Add truth / anti-hallucination guardrails
7. Implement/refactor agents

## Command Hierarchy
- Level 0: CEO / Root Agent
- Level 1: COO, Chief of Staff, Audit/Truth
- Level 2: Functional agents (Sales, Marketing, Support, Research, DevOps, Memory, Meeting Observer)
- Level 3: Tool workers / Apps Script / integration workers

## Success Criteria
- Verifiable routing and schedules
- Structured outputs for every agent
- Approval gates documented and enforced
- Portable client template defined
- Meeting-to-action automation defined
- Truth and audit layer present everywhere
