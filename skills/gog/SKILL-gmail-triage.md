---
name: gog-gmail-triage
description: Automated Inbox Triage
---
# Gmail Triage Automation

## Workflow
- Search unread -> Apply label -> Archive non-urgent.

## Pattern
`gog gmail search 'is:unread' --max 10 --json | jq -r '.[].id' | xargs -I {} gog gmail thread modify {} --add INBOX --remove UNREAD --account $GOG_ACCOUNT`
