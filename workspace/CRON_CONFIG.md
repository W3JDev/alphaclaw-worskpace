# CRON_CONFIG.md — AlphaClaw Cron Setup Reference

## Add these to openclaw.json under "cron" section

{
 "cron": {
 "jobs": [
 {
 "name": "clock-in-reminder",
 "schedule": "0 20 * * 1-5",
 "timezone": "Asia/Kuala_Lumpur",
 "task": "Send Jewel a clock-in reminder on Telegram. Include today's top Bold Business tasks from workspace context, any open GitHub issues/PRs, and any priority emails received since last check."
 },
 {
 "name": "end-of-shift",
 "schedule": "0 5 * * 2-6",
 "timezone": "Asia/Kuala_Lumpur",
 "task": "Send Jewel an end-of-shift summary on Telegram. List what was completed today, what is still pending, and suggest top 3 tasks for next shift."
 },
 {
 "name": "email-monitor",
 "schedule": "*/30 * * * *",
 "task": "Check inbox for priority emails (Bold Business team, GitHub assigned PRs, subjects containing invoice/payment/urgent/contract/deadline, or security alerts). For each priority email found, send a Telegram alert with: sender, subject, 1-sentence summary, action needed."
 }
 ]
 }
}

## Telegram Group Setup
1. Create a Telegram group: "AlphaClaw HQ"
2. Add your Telegram account + the work bot
3. Get group chat ID via Telegram API (getUpdates)
4. Add group config under "telegram" in openclaw.json
5. Use group for work notifications, DM for personal reminders