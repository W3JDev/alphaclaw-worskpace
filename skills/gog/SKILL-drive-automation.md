---
name: gog-drive-automation
description: Drive operations using gog CLI
---

# Drive Automation

## Patterns
- List: `gog drive ls --parent <folderId> --json`
- Upload: `gog drive upload ./file --parent <folderId> --convert`
- Share: `gog drive share <fileId> --to user --email <email> --role <role>`

## Quality Gate
- Always create project folder first.
- Always set share permissions immediately.
- Return share link to user.
