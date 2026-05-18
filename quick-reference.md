# Quick Reference Card — Kilo CLI

## Starting the Agent

```bash
# Interactive chat mode
kilo

# One-shot autonomous task
kilo run --auto "describe your task"
```

## Useful Commands

```bash
# Ask the agent to read/analyze files
kilo run --auto "Read src/app.js and explain what it does"

# Ask the agent to write/modify code
kilo run --auto "Add input validation to the divide function"

# Ask the agent to run commands
kilo run --auto "Run the tests and tell me which ones fail"

# Ask the agent to search for information
kilo run --auto "Search for best practices for Express.js error handling"

# Multi-step tasks
kilo run --auto "1. Read the bug report 2. Find the cause 3. Fix it 4. Run tests"
```

## Prompt Tips

✅ **Good prompts:**
- "Read FILE and find all security issues"
- "Refactor this function to use async/await"
- "Write tests for the validateInput function"
- "Compare these two approaches and recommend one"

❌ **Vague prompts:**
- "Fix the code"
- "Make it better"
- "What do you think?"

## The Agentic Engineering Pattern

1. **Research** — Gather context first
2. **Plan** — Ask for a plan before acting
3. **Build** — Execute the plan
4. **Validate** — Test the result
5. **Review** — Check the output yourself

## Keyboard Shortcuts (Interactive Mode)

- `Ctrl+C` — Interrupt the agent
- `Ctrl+D` — Exit
- `↑/↓` — Browse command history

## Getting Help

```bash
kilo --help
kilo run --help
```
