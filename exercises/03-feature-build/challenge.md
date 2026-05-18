# Team Build Challenge

**Time:** 75 minutes  
**Mode:** Teams of 5, competing

## Choose Your Track

Each team picks ONE track. You have 75 minutes to build something and prepare a 3-minute demo.

---

## Track A: "Fix Our App" 🐛

### The Situation

You've inherited a Task Tracker API. It's buggy, missing features, and has no tests. Your job: make it better using your AI agent.

### What's in the Workspace

```
/workspace/challenges/track-a/
├── src/
│   ├── index.js          # The main app (with bugs)
│   └── __tests__/        # Partial test suite
├── package.json
└── BUGS.md               # Hint: there are 3 known bugs
```

### Known Issues (for your agent to find)
1. Null handling in the PUT endpoint
2. Missing input validation
3. No error handling middleware

### Feature Requests
1. Filter tasks by status: `GET /api/tasks?status=open`
2. Add pagination: `GET /api/tasks?page=1&limit=10`

### Your Mission

Use the agent to:
1. Find and fix at least 2 bugs
2. Implement at least 1 feature
3. Make sure the app still works
4. Commit your changes

### Demo Requirements (3 minutes)
- Show the bug before and after
- Demo the new feature
- Explain what the agent did well and where you had to guide it

---

## Track B: "Build a Workflow Agent" 🤖

### The Situation

Your department has a repetitive process that takes too long. Design an AI agent that automates it.

### Example Workflows (pick one or invent your own)

| Workflow | Description |
|---|---|
| **Meeting Prep Agent** | Reads calendar, gathers relevant docs, creates agenda, sends pre-read |
| **Expense Report Assistant** | Reads receipts, categorizes expenses, fills the form, submits for approval |
| **Onboarding Buddy** | New hire asks questions, agent answers from company docs, tracks progress |
| **Customer Meeting Prep** | Reads CRM data, researches the customer, creates briefing doc |
| **Weekly Report Generator** | Pulls data from multiple sources, writes the weekly status report |

### Your Mission

1. Pick a workflow (or invent your own)
2. Describe it in detail to the agent
3. Ask the agent to design the automation:
   - What inputs does it need?
   - What steps does it take?
   - What does it produce?
4. Create the prompts/templates/scripts the agent would use
5. Test it with sample data

### Demo Requirements (3 minutes)
- Describe the workflow you automated
- Show the agent doing the work
- Explain the time savings (estimate: "This used to take 2 hours, now it takes 5 minutes")
- What would you need to make this production-ready?

---

## Track C: "AI Solves Our Problem" 💡

### The Situation

Every department has problems that seem unsolvable. Use AI to research, design, and pitch a solution.

### How It Works

1. **Identify a real problem** from your department (or make one up)
   - Examples: "New hires take 3 months to become productive"
   - "We spend 4 hours/week on status reports"
   - "Customer onboarding has a 30% drop-off rate"

2. **Use the agent to research:**
   - How have other companies solved this?
   - What tools exist?
   - What are the best practices?

3. **Design a solution concept:**
   - What would the AI-powered solution look like?
   - What would it cost?
   - What's the ROI?

4. **Prepare a pitch:**
   - Problem statement (1 sentence)
   - Proposed solution (2 sentences)
   - Expected impact (numbers if possible)
   - What you need to make it happen

### Your Mission

1. Brainstorm problems as a team (10 min)
2. Pick the most interesting one (5 min)
3. Research with the agent (25 min)
4. Design the solution concept (20 min)
5. Prepare the pitch (15 min)

### Demo Requirements (3 minutes)
- The problem (make us care)
- The solution (make us believe)
- The impact (make us want it)
- The ask (what do you need?)

---

## Judging Criteria

Each team is scored on 4 criteria (1-5 points each):

| Criteria | What it means |
|---|---|
| 🎨 **Creativity** | Did they think outside the box? Unexpected approach? |
| 💼 **Usefulness** | Could this actually help someone at work tomorrow? |
| 🤝 **Teamwork** | Did everyone contribute? Cross-functional collaboration? |
| ✨ **Wow factor** | Did it make the audience go "whoa"? |

**Max score: 20 points**

---

## Tips for Success

1. **Divide roles early** — Driver, Navigator, Scribe, Validator, Presenter
2. **Start simple** — Get one thing working before adding complexity
3. **Talk to each other** — The non-laptop people are the most valuable: domain knowledge
4. **Practice the demo** — 3 minutes goes fast. Rehearse at least once.
5. **Have fun** — Judges reward creativity and humor, not just technical correctness
