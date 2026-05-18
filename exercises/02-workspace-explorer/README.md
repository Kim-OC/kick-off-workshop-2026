# Exercise 2: Exploring an Agent's Workspace

**Time:** 30 minutes  
**Mode:** Individual or pair

## Objective

Understand what an AI agent "sees" — its files, memory, skills, and tools. Learn how context shapes agent behavior.

## What You'll Do

1. Explore the agent's workspace structure
2. Read its memory files
3. Check what skills are installed
4. Ask the agent about its own capabilities

## Steps

### Step 1: Explore the File System

```bash
kilo run --auto "List all files and directories in the workspace. Show me the directory tree."
```

### Step 2: Read the Agent's Memory

```bash
kilo run --auto "Read MEMORY.md and tell me: what does this agent know about its user? What has it been working on?"
```

### Step 3: Check Installed Skills

```bash
kilo run --auto "List all installed skills. For each one, summarize what it can do in one sentence."
```

### Step 4: Investigate the Mystery Project

In `exercises/02-workspace-explorer/mystery-project/` there is a codebase with no documentation.

```bash
kilo run --auto "Explore the mystery-project directory. Figure out:
1. What technology stack is used?
2. What is the main purpose of this application?
3. How would a new developer get started contributing?
4. Are there any architectural concerns?"
```

### Step 5: Ask the Agent About Itself

```bash
kilo run --auto "What tools do you have access to? What can you help me with?"
```

## Discussion Questions

1. How much context does the agent need to be useful?
2. What's the difference between the agent's memory and its skills?
3. How would you set up an agent for your own work?
