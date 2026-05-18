# Mystery 2: The Workflow Detective

## The Situation

You've been asked to analyze the monthly expense report process at Ida Infront. Here's how it works today:

## The Current Process

**Step 1:** Employees take photos of receipts throughout the month and save them on their phone.

**Step 2:** On the last Friday of each month, the finance team sends a reminder email: "Please submit your expense reports by Monday."

**Step 3:** Employees fill out a PDF form:
- Date of expense
- Amount
- Category (travel, meals, software, equipment, other)
- Attach receipt photo
- Email to finance@idainfront.se

**Step 4:** The finance team (2 people) receives ~50 expense reports. For each one:
- Open the PDF
- Check that the receipt photo is attached and readable
- Manually verify the amount matches the receipt
- Categorize the expense (sometimes the employee picked the wrong category)
- Enter the data into the accounting system (Fortnox)
- Flag any expenses over 5,000 SEK for manager approval
- If something is wrong, email the employee and wait for correction

**Step 5:** Once all 50 reports are processed, the finance team creates a summary report in Excel:
- Total expenses by category
- Total expenses by department
- Month-over-month comparison
- Any anomalies or trends

**Total time:** Approximately 3 working days for 2 people = 48 person-hours per month.

## Your Task

Ask your AI agent to:
1. Find all inefficiencies in this process
2. Identify which steps could be automated and how
3. Estimate the time savings
4. Design an improved process

## Hidden Inefficiencies (for facilitator eyes only)

1. **Receipt processing** — AI could OCR receipts, auto-extract amount/date/merchant
2. **Categorization** — AI could auto-categorize based on merchant/amount patterns
3. **Validation** — AI could check receipt matches amount, flag anomalies automatically
4. **Data entry** — Auto-push to Fortnox via API instead of manual entry
5. **Summary report** — Auto-generated from structured data
6. **Submission** — Simple app instead of PDF form (mobile-friendly, instant submission)
7. **Reminders** — Automated nudges, not manual emails
8. **Estimated savings:** 48 hours/month → ~4 hours/month (90% reduction)
