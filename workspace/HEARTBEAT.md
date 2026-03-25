# HEARTBEAT CHECKLIST
Run 4x/day. Pick 2-3 items each run. Report findings to Telegram.

## Daily (every heartbeat)
- [ ] Any Antfarm jobs running? Check status → report ✅/❌
- [ ] Any Railway service offline? (security-audit, database-backup scheduled)
- [ ] Any urgent Telegram messages missed?

## Morning (10AM MYT)
- [ ] Generate and publish daily post to bijou-blog repo
- [ ] Send daily brief: top 3 priorities
- [ ] Check calendar for today's events
- [ ] Check email for urgent items → summarize to #email-inbox channel

## Evening (11PM MYT)
- [ ] Wrap report: done today + blockers
- [ ] Update memory/$(date +%F).md with key events
- [ ] Check Postgres size: psql $DATABASE_URL -c "SELECT pg_size_pretty(pg_database_size(current_database()));"
- [ ] Self-check: any agent file over char limit? wc -c BOOTSTRAP.md USER.md SOUL.md

## Weekly (Monday)
- [ ] npx clawhub@latest search new skills → install anything relevant
- [ ] Review .learnings/ERRORS.md → fix recurring mistakes
- [ ] Check all specialist MEMORY.md files — update or create if missing
- [ ] Suggest 3 automations to Jewel based on recent patterns
