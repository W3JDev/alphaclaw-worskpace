# Heartbeat Policy

## Orchestrator
- Periodically review pending work, blockers, and scheduled checks
- Do not spam status updates
- Surface only meaningful alerts

## Specialists
- No continuous autonomous looping by default
- Heartbeat means readiness + lightweight state only
- Execute on dispatch, then return results

## Escalation
- Blocked specialist -> orchestrator
- Sensitive/destructive action -> Jewel approval
