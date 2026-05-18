# Ida Infront Kick-Off 2026 — AI Agent Workshop

**6-hour hands-on workshop: Building with AI Agents using OpenClaw & Kilo Code**

## Workshop Overview

| | |
|---|---|
| **Duration** | 6 hours (09:00–15:00, with breaks) |
| **Audience** | Mixed — developers, architects, tech leads, PMs |
| **Prerequisites** | Basic programming understanding. No prior AI/agent experience required. |
| **Format** | Live demos + hands-on exercises + group discussion |
| **Accounts needed** | None. All environments are pre-provisioned. |

## Learning Objectives

By the end of this workshop, participants will be able to:

1. **Explain** what AI agents are and how they differ from chatbots
2. **Use** Kilo Code (CLI + IDE) to delegate tasks to an AI agent
3. **Understand** the OpenClaw architecture — how agents connect to tools, memory, and communication channels
4. **Build** a simple multi-agent workflow for a realistic development task
5. **Identify** when to use agents vs traditional automation vs human work
6. **Apply** Agentic Engineering patterns (Research → Plan → Build → Validate)

---

## Agenda

### Block 1: Foundations (09:00–10:30) — 90 min

#### 09:00–09:30 | Welcome & Introductions
- Workshop goals and structure
- Quick poll: "What's your experience with AI coding tools?"
- Set expectations: this is hands-on, not lecture

#### 09:30–10:00 | What Is an AI Agent? (Interactive Demo)
- Chatbot vs Agent: the key difference is **action**
- Live demo: Magnus asks Kim (his AI assistant) to do something real
  - Example: "Check my calendar for conflicts next week and draft reschedule emails"
- The Agent Loop: **Perceive → Think → Act → Observe → Repeat**
- Key concepts: tools, memory, context, guardrails

#### 10:00–10:30 | Exercise 1: Your First Agent Interaction 🛠️
- Participants receive a pre-configured KiloClaw instance
- **Task:** Use `kilo` CLI to ask the agent to analyze a sample codebase
- Steps:
  1. Connect to assigned instance (URL + token provided)
  2. Run `kilo run --auto "Summarize this project: what does it do, what language, any issues?"`
  3. Review the output together
- **Debrief:** What surprised you? What worked? What felt off?

*☕ Break 10:30–10:45 (15 min)*

---

### Block 2: Understanding the Platform (10:45–12:00) — 75 min

#### 10:45–11:15 | OpenClaw Architecture Deep-Dive
- **The big picture:** How OpenClaw connects AI models to the real world
- Architecture walkthrough:
  ```
  Human (Slack/Telegram/Discord/CLI)
    ↓
  Gateway (OpenClaw)
    ↓
  Agent Session (context + memory + tools)
    ↓
  Tools: web search, file system, browser, GitHub, calendar, MCP servers
    ↓
  LLM (model: Claude, GPT, etc.)
  ```
- **Key concepts:**
  - Sessions: main vs isolated vs sub-agent
  - Memory: MEMORY.md, daily files, skill context
  - Skills: reusable capability packages (SKILL.md pattern)
  - Cron jobs: scheduled autonomous work
  - Security: sandbox, approval flows, tool policies

#### 11:15–11:45 | Exercise 2: Exploring an Agent's Workspace 🛠️
- **Task:** Investigate a pre-loaded project workspace
- Participants explore:
  1. Read the agent's MEMORY.md — what does it know?
  2. Check the skills installed — what can it do?
  3. Ask the agent: "What files are in the workspace?" and "What skills do you have?"
  4. Ask it to run a command: `git log --oneline -5`
- **Goal:** Understand the agent's "world" — files, memory, tools

#### 11:45–12:00 | Group Discussion
- What did you discover?
- How is this different from just using ChatGPT?
- What use cases come to mind for your daily work?

*🍽️ Lunch 12:00–13:00 (60 min)*

---

### Block 3: Building with Agents (13:00–14:15) — 75 min

#### 13:00–13:30 | Agentic Engineering Patterns
- The 8-pattern lifecycle (from Ida Infront's own framework):
  1. **Research** — gather context before acting
  2. **Plan** — break work into actionable steps
  3. **Build** — execute with tool use
  4. **Validate** — test the output
  5. **Peer Review** — human or agent review
  6. **Deploy** — ship it
  7. **Operate** — monitor and maintain
  8. **Retire** — know when to sunset
- Anti-patterns to avoid (from real workshop data):
  - LLM self-validation
  - Skipping research
  - No prompt review
  - No cost tracking

#### 13:30–14:15 | Exercise 3: Build a Feature with an Agent 🛠️
- **Scenario:** A small bug fix + feature request in a sample application
- Pre-loaded repo: a simple web app with a known issue
- **Task (in pairs):**
  1. Use `kilo run --auto` to investigate the bug
  2. Ask the agent to propose a fix (Plan pattern)
  3. Have the agent implement the fix (Build pattern)
  4. Verify the fix works (Validate pattern)
  5. Write a commit message and commit
- **Deliverable:** A working fix with a clean git history

*☕ Break 14:15–14:30 (15 min)*

---

### Block 4: Multi-Agent Systems & Real-World Application (14:30–15:00) — 45 min

#### 14:30–14:45 | Multi-Agent Architectures
- Single agent → multi-agent: when and why
- Patterns:
  - **Parallel fan-out:** multiple agents research simultaneously
  - **Specialist roles:** researcher, coder, reviewer
  - **Guardian pattern:** one agent checks another's work
- Live demo: Kim's trading agent (market_analyst → news_sentiment → portfolio_manager)
- Real example from production: AddNode Agent AI Challenge

#### 14:45–15:00 | Wrap-Up & Next Steps
- What we covered
- Key takeaways
- **Getting started on Monday:**
  - How to request your own KiloClaw instance
  - GitHub integration setup (5 min)
  - First things to try
- Feedback form
- Q&A

---

## Preparation Checklist

### 4 Weeks Before
- [ ] Confirm participant count and room/tech setup
- [ ] Order/provision KiloClaw instances (1 per participant or 1 per pair)
- [ ] Create GitHub organization for the workshop
- [ ] Prepare sample repositories

### 2 Weeks Before
- [ ] Send participant pre-communication (what to expect, no prep needed)
- [ ] Test all KiloClaw instances end-to-end
- [ ] Prepare exercise materials and solution keys
- [ ] Create feedback form

### 1 Week Before
- [ ] Final instance check: all instances responding, tokens valid
- [ ] Load sample repos into each instance workspace
- [ ] Print/hand out quick-reference cards
- [ ] Dry run the full workshop with a colleague

### Day Before
- [ ] Verify internet connectivity in workshop room
- [ ] Test projection/screen sharing
- [ ] Confirm all instance URLs and access tokens
- [ ] Prepare backup plan (local instances if network fails)

---

## Technical Setup Details

### KiloClaw Instances

Each participant (or pair) gets a pre-configured KiloClaw instance with:

| Component | Details |
|---|---|
| **Platform** | KiloClaw (OpenClaw-based) on Fly.io |
| **Model** | Claude (balanced tier) |
| **CLI** | `kilo` (Kilo Code CLI, pre-installed) |
| **Access** | Web URL + HMAC-authenticated session token |
| **Channels** | CLI only for workshop (no Slack/Telegram needed) |
| **Sandbox** | Isolated workspace with pre-loaded exercises |

**Provisioning steps:**
1. Create KiloClaw instance via Kilo dashboard or CLI
2. Configure agent profile with workshop-specific SOUL.md
3. Set up sandbox workspace with exercise files
4. Generate access token (valid for workshop duration)
5. Document URL + token for each participant

### GitHub Integration

A dedicated GitHub organization is created for the workshop:

| Item | Details |
|---|---|
| **Org** | `ida-infront-workshop-2026` (or similar) |
| **Repos** | Pre-created template repos for each exercise |
| **Access** | Workshop bot token (read/write to all exercise repos) |
| **Participant accounts** | NOT required — the agent's bot token handles all git operations |

**Why no personal GitHub accounts needed:**
- The KiloClaw instance has its own GitHub token
- All git operations happen through the agent
- Participants interact via the agent's CLI interface
- Results are committed to shared workshop repos (readable by all)

**Repos to pre-create:**
1. `exercise-1-hello-agent` — simple project for first interaction
2. `exercise-2-workspace-explorer` — project with memory, skills, files to explore
3. `exercise-3-feature-build` — web app with known bug + feature request
4. `workshop-solutions` — where participants' outputs land

### Pre-Loaded Workspace Content

Each instance workspace contains:

```
/root/.openclaw/workspace/
├── SOUL.md                    # Agent personality (workshop version)
├── AGENTS.md                  # Workshop-specific instructions
├── MEMORY.md                  # Pre-seeded with workshop context
├── exercises/
│   ├── 01-first-interaction/
│   │   ├── README.md          # Exercise instructions
│   │   └── sample-project/    # Code to analyze
│   ├── 02-workspace-explorer/
│   │   ├── README.md
│   │   └── mystery-project/   # Project to investigate
│   └── 03-feature-build/
│       ├── README.md
│       └── webapp/            # Web app with bug + feature request
├── quick-reference.md         # CLI commands cheat sheet
└── feedback-link.txt          # URL to feedback form
```

### Quick Reference Card (for participants)

```
Essential Kilo CLI Commands
═══════════════════════════════════════════════════

Interactive mode:
  kilo                          # Start interactive chat

Autonomous mode (one-shot):
  kilo run --auto "your task"   # Agent does the work, returns result

Useful patterns:
  kilo run --auto "Read FILE and explain what it does"
  kilo run --auto "List all files in the workspace"
  kilo run --auto "Fix the bug in webapp/src/app.js"

Tips:
  • Be specific about what you want
  • Ask the agent to explain its reasoning
  • If something goes wrong, ask "what happened?"
═══════════════════════════════════════════════════
```

---

## Presenter Notes

### Live Demo Script (09:30 section)

**Setup:** Magnus's real KiloClaw instance, Slack channel visible on screen

**Demo flow:**
1. Show Magnus asking Kim a real question in Slack
2. Show Kim's response (research + action)
3. Show Kim's memory files — what it remembers about Magnus
4. Show the architecture diagram — connect what they just saw to the technical layer

**Key talking points:**
- "This isn't a chatbot — it has access to tools, files, calendar"
- "It remembers things between conversations"
- "It can act on your behalf (with approval)"
- "This is running 24/7, not just when you talk to it"

### Exercise Facilitation Tips

**Exercise 1:** Keep it light. The goal is "wow, it understood me" not perfection.
**Exercise 2:** Encourage exploration. There's no "right answer" — curiosity wins.
**Exercise 3:** Walk around. Pairs will get stuck at different points. Have solution hints ready.

### Common Issues & Responses

| Issue | Response |
|---|---|
| "It's too slow" | Explain: thinking time = quality. Show the difference between fast and thorough |
| "It made a mistake" | Great teaching moment! Discuss agent limitations and validation |
| "I don't know what to ask" | Provide prompt starter cards |
| "This is just autocomplete" | Show the agent loop — it reads, thinks, acts, checks |

---

## Post-Workshop Follow-Up

1. **Day after:** Send thank-you email with resources + recording (if applicable)
2. **Week after:** Share "top 5 things participants built"
3. **Month after:** Check-in survey — who's still using agents? What's blocking others?
4. **Quarter after:** Measure adoption metrics — instances created, tasks delegated, time saved
