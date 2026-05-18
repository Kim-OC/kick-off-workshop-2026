# Quick Reference Card — Ida Infront AI Workshop 2026

## Your KiloClaw Instance

- **URL:** Provided by facilitator
- **Token:** Provided by facilitator
- **CLI:** `kilo` (pre-configured on team lead's laptop)

## Essential Commands

```bash
# Start interactive chat
kilo

# One-shot task (agent works autonomously)
kilo run --auto "your task here"

# Useful patterns:
kilo run --auto "Read this file and explain what it does"
kilo run --auto "Find all bugs in this project"
kilo run --auto "Fix the bug in src/index.js"
kilo run --auto "Write a test for the PUT endpoint"
kilo run --auto "Add status filtering to GET /api/tasks"
```

## Prompt Tips

**Good prompts:**
- "Read FILE and find all security issues"
- "Refactor this function to handle errors properly"
- "Write tests for the validateInput function"
- "Compare these two approaches and recommend one"

**Vague prompts (avoid these):**
- "Fix the code"
- "Make it better"
- "What do you think?"

## The Agentic Engineering Pattern

1. **Research** — Gather context first
2. **Plan** — Ask for a plan before acting
3. **Build** — Execute the plan
4. **Validate** — Test the result
5. **Review** — Check the output yourself

## Team Roles

| Role | Responsibility |
|---|---|
| Driver | Types commands into the terminal |
| Navigator | Decides what to ask next |
| Scribe | Notes interesting findings |
| Validator | Checks if output makes sense |
| Presenter | Demos the result to the group |

## Keyboard Shortcuts

- `Ctrl+C` — Interrupt the agent
- `Ctrl+D` — Exit
- `Up/Down arrows` — Browse command history

## Need Help?

Raise your hand — coaches are circulating!
