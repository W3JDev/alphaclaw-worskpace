
## [LRN-20260323-001] correction

**Logged**: 2026-03-23T15:53:00Z
**Priority**: high
**Status**: pending
**Area**: infra

### Summary
Cron presence alone does not mean automation is working; verify runtime, PATH, and logs before reporting jobs as active.

### Details
User challenged the claim that cron jobs existed and were active. Audit showed root crontab entries do exist on this host, but the jobs are failing with `/bin/sh: 1: node: not found`, and the user also observed a shell context showing no cron jobs. Correct behavior is to distinguish configured crontab entries from functioning automation and to verify logs/execution path before claiming success.

### Suggested Action
Always audit `crontab -l`, cron file locations, target file existence, and recent logs. Treat `node` PATH failures in cron as inactive automation until fixed.

### Metadata
- Source: user_feedback
- Related Files: /data/.openclaw/workspace/automation/cron.log, /data/.openclaw/workspace/automation/meeting-cron.log, /data/.openclaw/workspace/w3j-ops/logs/session.log
- Tags: cron, automation, path, correction

---
