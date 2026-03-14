---
name: gog-gmail-automation
description: Gmail professional workflows using gog CLI
---

# Gmail Automation

## Patterns
- Send: `gog gmail send --to user@example.com --subject "Sub" --body-html "<p>Body</p>"`
- Reply: `gog gmail send --reply-to-message-id <msgId> --quote --body-file ./body.txt`
- Labels: `gog gmail thread modify <threadId> --add STARRED --remove INBOX`

## Quality Gate
- Use professional sign-off.
- Use --body-html for multi-line.
- Use GOG_ACCOUNT.
