# Exercise 1: Your First Agent Interaction

**Time:** 30 minutes  
**Mode:** Individual or pair

## Objective

Get comfortable talking to an AI agent. Send a task, review the output, and iterate.

## What You'll Do

1. Open your terminal
2. Run the `kilo` CLI to interact with your pre-configured agent
3. Ask it to analyze a sample project
4. Refine your prompt based on the result

## Steps

### Step 1: Connect to Your Agent

Your facilitator will provide:
- A URL to your KiloClaw instance
- A session token

In your terminal:
```bash
# The kilo CLI is pre-configured on your machine
kilo
```

### Step 2: Analyze the Sample Project

Run this command:

```bash
kilo run --auto "Read the files in /workspace/exercises/01-first-interaction/sample-project/ and tell me:
1. What language is this written in?
2. What does the program do?
3. Are there any obvious bugs or issues?
4. How would you improve it?"
```

### Step 3: Review the Output

Read the agent's response. Check:
- Did it correctly identify the language?
- Did it find the intentional bug? (there is one!)
- Were the improvement suggestions reasonable?

### Step 4: Iterate

Now try a follow-up:

```bash
kilo run --auto "Fix the bug you found and show me the corrected code"
```

Compare the fix with your expectations.

## Discussion Questions (for group debrief)

1. What surprised you about the interaction?
2. How did the agent's response compare to what you expected?
3. What would you use this for in your daily work?
