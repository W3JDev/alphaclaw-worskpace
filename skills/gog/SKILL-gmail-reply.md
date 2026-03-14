---
name: gog-gmail-reply
description: Threaded professional replies using gog CLI
---
# Gmail Reply Automation

## Workflow
- Use --quote for context.
- Maintain thread structure.

## Pattern
`gog gmail send --reply-to-message-id <msgId> --quote --body-html "<p>Hi,</p><p>...</p>" --account $GOG_ACCOUNT`
