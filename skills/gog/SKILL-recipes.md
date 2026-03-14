---
name: gog-recipes
description: 10 multi-step gog recipes
---

# Automation Recipes

1. **Daily Report:** `gog gmail search 'newer_than:1d' --max 5 --json > report.json` -> `gog docs create "Daily Report" --file report.json`
2. **Task Cleanup:** `gog tasks list <listId> --json` -> `gog tasks clear <listId>`
3. **Contact Sync:** `gog gmail search 'from:...' --max 10 --json` -> `gog contacts create ...`
4. **Project Setup:** `gog drive mkdir "Project X"` -> `gog drive share <folderId> ...`
5. **Sheet Template:** `gog sheets create "New Sheet"` -> `gog sheets format ...`
6. **Email Responder:** `gog gmail search 'is:unread' --max 1 --json` -> `gog gmail send --reply-to-message-id ...`
7. **Document Sync:** `gog drive ls --parent <id> --json` -> `gog docs update <id> ...`
8. **Calendar Conflict:** `gog calendar conflicts --calendars primary --today`
9. **Asset Management:** `gog drive upload ...` -> `gog drive share ...`
10. **Archive Loop:** `gog gmail thread get <id> --download` -> `gog drive upload ...`
