## [ERR-20260318-001] antfarm_gateway_auth_and_acpx_auth

**Logged**: 2026-03-18T19:47:00Z
**Priority**: high
**Status**: pending
**Area**: infra

### Summary
Antfarm workflow start failed because its gateway HTTP preflight hit 401 Unauthorized and did not fall back to CLI; ACPX/Codex failed because no Codex credentials were configured.

### Error
```text
Antfarm: Cannot start workflow run: cron setup failed. Gateway returned 401: {"error":{"message":"Unauthorized","type":"unauthorized"}}
ACPX/Codex: Authentication required
```

### Context
- Triggered while trying to build and deploy the Bijou blog site.
- `openclaw cron list --json` works locally via CLI.
- Direct POST to `http://127.0.0.1:18789/tools/invoke` with bearer token from `/data/.openclaw/openclaw.json` returns 401.
- `openclaw status` reports gateway unreachable with missing scope: `operator.read`.
- Plugin-local `acpx` under `/app/node_modules/openclaw/extensions/acpx/node_modules/.bin/acpx` exists but is version `0.1.16`, while extension package depends on `acpx` `0.3.0`.
- `acpx codex exec` initializes but reports auth methods available with no matching credentials found, then fails with `Authentication required`.

### Suggested Fix
- Antfarm: treat 401 in gateway preflight as fallback-eligible and use `openclaw cron` CLI, or fix gateway auth token/scope so `/tools/invoke` accepts cron requests.
- ACPX/Codex: configure Codex auth (chatgpt/codex-api-key/openai-api-key) or use a different authenticated coding agent.
- ACPX packaging: repair pinned plugin-local `acpx` version mismatch.

### Metadata
- Reproducible: yes
- Related Files: antfarm/src/installer/gateway-api.ts, /data/.openclaw/openclaw.json
- See Also: memory/2026-03-17.md#L1-L24

---
