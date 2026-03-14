---
name: gog-docs-premium
description: Elite Document generation using gog CLI
---

# Premium Docs Automation

## Formatting Standard
- Page 1: Table of Contents (TOC).
- H1/H2/H3 structure.
- Bordered tables for data.

## Command Patterns
- Create: `gog docs create "Title" --file ./source.md`
- Export: `gog docs export <docId> --format pdf --out ./output.pdf`
- Update: `gog docs update <docId> --format markdown --content-file ./update.md`
- Find/Replace: `gog docs find-replace <docId> "old" "new"`

## Quality Gate
- Exec summary in intro.
- Professional sign-off.
- Use GOG_ACCOUNT env var.
