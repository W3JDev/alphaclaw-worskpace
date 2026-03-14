---
name: gog-sheets-premium
description: Advanced Google Sheets workflows using gog CLI
---

# Premium Sheets Automation

## Advanced Formulas
Always use: `QUERY`, `ARRAYFORMULA`, `LAMBDA`, `LET`.
- --input USER_ENTERED always

## Command Patterns
- Append: `gog sheets append <spreadsheetId> '<range>' 'data1|data2|data3' --account $GOG_ACCOUNT`
- Update: `gog sheets update <spreadsheetId> '<range>' --values-json '[["val1", "val2"]]' --account $GOG_ACCOUNT`
- Format: `gog sheets format <spreadsheetId> '<range>' --format-json '{"textFormat":{"bold":true}}' --format-fields '...' --account $GOG_ACCOUNT`

## Quality Gate
- Freeze headers.
- Use conditional formatting (Red/Amber/Green).
- Use Named Ranges for all critical inputs.
- Always output JSON or TSV via --json / --plain.
