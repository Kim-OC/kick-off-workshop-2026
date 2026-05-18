# Exercise 1: Talk to Your First Agent

**Time:** 60 minutes  
**Mode:** Teams of 5, one laptop per team  
**Facilitator-led**

## Objective

Everyone interacts with an AI agent for the first time. First "aha moment" — seeing an agent *understand* and *act*.

## Setup

- Team lead opens laptop and terminal
- Team gathers around the screen
- KiloClaw instance is pre-configured and ready

## Part A: Guided Interaction (20 min)

The facilitator walks everyone through these commands on the big screen. Each team follows along on their laptop.

### Command 1: Meet Your Agent

```bash
kilo run --auto "Introduce yourself. What are you, and what can you help with?"
```

*What happens:* The agent describes itself, its capabilities, and its tools.

### Command 2: Analyze a Project

```bash
kilo run --auto "Read the files in the workspace and tell me:
1. What is this project?
2. What language is it written in?
3. What does it do?"
```

*What happens:* The agent reads files, understands the code, and summarizes.

### Command 3: Find Bugs

```bash
kilo run --auto "Find all bugs and issues in this project. Rank them by severity."
```

*What happens:* The agent finds the intentional bugs (and maybe some you didn't intend!).

## Part B: Team Mystery Challenge (25 min)

Each team gets a **mystery project** to investigate. The project is already loaded in the workspace.

**Instructions for the team:**
1. Decide together what you want to know about this project
2. Ask the agent questions — at least 3 different queries
3. Discuss: Do you agree with the agent's findings? What did it miss?
4. Pick one issue and ask the agent to fix it

**Suggested prompts:**
- "What's the most concerning thing about this code?"
- "If you were hired to improve this project, what would you do first?"
- "Explain this codebase like I'm a project manager with no coding experience"
- "What security issues do you see?"
- "Write a README for this project"

**Team roles (rotate):**
- **Driver** — Types commands into the terminal
- **Navigator** — Decides what to ask next
- **Scribe** — Notes interesting findings
- **Validator** — Checks if the agent's output makes sense
- **Presenter** — Will share findings with the group

## Part C: Group Share (15 min)

The facilitator calls on 2-3 teams:
- What did your agent find that surprised you?
- Did it miss anything obvious?
- What would you use this for at work?

## Key Takeaway

> The agent didn't just autocomplete — it *read*, *understood*, *analyzed*, and *acted*. That's the difference between a chatbot and an agent.
