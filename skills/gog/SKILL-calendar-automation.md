---
name: gog-calendar-automation
description: Calendar workflow using gog CLI
---

# Calendar Automation

## Patterns
- Today: `gog calendar events primary --today --json`
- Create: `gog calendar create primary --summary "Task" --from <ISO> --to <ISO> --attendees <list>`
- Respond: `gog calendar respond <calId> <eventId> --status accepted`

## Quality Gate
- Timezone awareness.
- Always send updates to external attendees.
- Include location/notes.
