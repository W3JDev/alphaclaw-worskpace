# MEETING_AUTOMATION_ARCHITECTURE

## Goal
Turn live meetings (Google Meet / Zoom / Teams) into:
- transcript
- summary
- decisions
- action items
- assignee list
- due dates
- manager update
- task tracker sync

## Proposed Flow
1. Meeting capture
2. Transcript ingestion
3. Speaker + topic segmentation
4. Decision extraction
5. Action-item extraction
6. Assignee inference
7. Due date inference
8. Draft summary generation
9. Human approval
10. Push to Docs / Sheets / Tasks / CRM / email

## Required Components
- recorder / transcript source
- observer agent
- extraction agent
- audit agent
- task sync worker
- manager brief generator

## Truth Rules
- no task assignment without evidence snippet
- no due date if not explicit unless marked inferred
- separate facts / decisions / assumptions / follow-ups
