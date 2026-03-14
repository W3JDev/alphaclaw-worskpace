---
name: gog-gmail-send
description: Professional email sending with W3J Premium Standard
---
# Gmail Send Automation

## Workflow
- Always use --body-html for multi-line professional emails.
- Always include a professional sign-off.
- Use GOG_ACCOUNT env var.

## Pattern
`gog gmail send --to <email> --subject "Subject" --body-html "<p>Hi,</p><p>...</p><p>Best,<br>Jewel</p>" --account $GOG_ACCOUNT`
