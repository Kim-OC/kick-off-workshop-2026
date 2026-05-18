# Mystery 1: The Bug Hunt

## The Situation

You've been asked to review a customer feedback application. Here's what you know:

> **App description:** Customers fill in their experience rating (1-5 stars), leave a text comment, and hit submit. The data goes to a Google Spreadsheet. The finance team reviews comments weekly.

## The Data

Here's a sample of the last 10 submissions:

| Date | Rating | Comment | Customer |
|---|---|---|---|
| 2026-05-01 | 5 | Great service! | anna@email.com |
| 2026-05-01 | | | anna@email.com |
| 2026-05-02 | three | It was okay | unknown |
| 2026-05-03 | 1 | Worst experience ever. I waited 3 hours. | |
| 2026-05-04 | 4 | Good but slow | bob@email.com |
| 2026-05-05 | 5 | Amazing! | anna@email.com |
| 2026-05-05 | 5 | Amazing! | anna@email.com |
| 2026-05-06 | 2 | | customer@email.com |
| 2026-05-07 | FIVE | Loved it!!! | |
| 2026-05-08 | 3 | Average | dave@email.com |

## Your Task

Ask your AI agent to:
1. Find all problems with this data collection process
2. Explain why each problem matters
3. Suggest specific improvements

## Hidden Issues (for facilitator eyes only)

1. **No validation** — empty submissions accepted (row 2, row 6)
2. **Inconsistent ratings** — "three", "FIVE" instead of numbers (rows 3, 9)
3. **Duplicate submissions** — same person, same comment, same day (rows 6-7)
4. **Missing email** — can't follow up with unhappy customers (rows 4, 9)
5. **No confirmation** — customers don't know if submission worked
6. **Manual review** — finance team spends hours reading comments instead of acting
