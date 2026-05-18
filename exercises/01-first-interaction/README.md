# Exercise 1: Your First AI Agent

**Time:** 60 minutes  
**Mode:** Teams of 5, one laptop per team  
**Facilitator-led**

## Objective

Everyone interacts with an AI agent for the first time. First "aha moment" — seeing an agent *understand* and *act*.

## Setup

- Team lead opens laptop and terminal
- Team gathers around the screen
- KiloClaw instance is pre-configured and ready
- No coding needed — everything via plain language prompts

## Part A: Guided Interaction (20 min)

The facilitator walks everyone through these commands on the big screen. Each team follows along on their laptop.

### Prompt 1: Meet Your Agent

```
kilo run --auto "Introduce yourself. What are you, and what can you help with?"
```

*What happens:* The agent describes itself, its capabilities, and its tools.

### Prompt 2: Analyze Something

```
kilo run --auto "Read the files in the workspace and tell me: what is in here?"
```

*What happens:* The agent reads files, understands the content, and summarizes.

### Prompt 3: Find Issues

```
kilo run --auto "Look at everything in the workspace. Find any problems, issues, or things that could be improved."
```

*What happens:* The agent analyzes content and finds problems — just like a smart colleague would.

## Part B: Team Mystery Investigation (25 min)

Each team gets a **mystery scenario** loaded in their workspace. The scenario is a description of a real situation — an app, a workflow, or a data set — with hidden problems.

**The team's job:**
1. Read the mystery scenario description
2. Ask the agent to analyze it
3. Ask follow-up questions based on what it finds
4. Debate: Do we agree with the agent's findings?
5. Ask the agent to suggest solutions

### Mystery 1: "The Bug Hunt"

> *"This is a customer feedback form app. Customers fill in their experience rating (1-5 stars), leave a comment, and submit. The data goes to a spreadsheet."*

**Hidden issues the agent should find:**
- No validation — empty submissions accepted
- No duplicate detection — same person can spam
- Star rating stored as text — can't calculate average
- No confirmation after submission

### Mystery 2: "The Workflow Detective"

> *"Every month, the finance team collects expense reports from 50 employees. They check each receipt, categorize it, enter it into the system, flag anomalies, and produce a summary report. The process takes 3 days."*

**Hidden inefficiencies the agent should find:**
- Receipt photos could be processed by AI (OCR + auto-categorization)
- Anomaly detection could be automated
- Summary report could be generated automatically
- Employee submission could be a simple app

### Mystery 3: "The Data Puzzle"

> *"Here are support ticket numbers for the last 6 months, categorized by type. Find patterns and suggest improvements."*

**Patterns the agent should find:**
- Certain ticket types spike after product releases
- Resolution time correlates with ticket category
- Self-service could reduce certain categories

**Team roles:**
| Role | Who | What they do |
|---|---|---|
| Driver | Anyone | Types prompts into the terminal |
| Navigator | Anyone | Decides what to ask next |
| Domain Expert | PM/Finance/HR | Validates findings against real-world knowledge |
| Challenger | Anyone | Questions the agent's conclusions |
| Presenter | Anyone | Prepares to share findings |

## Part C: Group Share (15 min)

The facilitator calls on 2-3 teams:
- What did your agent find that surprised you?
- Did it miss anything obvious?
- What would you use this for at work?

## Key Takeaway

> The agent didn't just autocomplete — it *read*, *understood*, *analyzed*, and *suggested*. That's the difference between a chatbot and an agent.
