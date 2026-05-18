# Ida Infront Kick-Off 2026 — AI Agent Workshop

**6-hour hands-on workshop: "Build Your AI Team"**

> *"Instead of talking about innovation, we're building it."* — Inspired by ASNT's AI Agent Battle

## Quick Facts

| | |
|---|---|
| **Duration** | 6 hours (09:00–15:00) |
| **Participants** | ~100 people, mixed roles (devs, PMs, finance, HR) |
| **Format** | 20 teams × 5 people, team leads with laptops |
| **Setting** | Physical kick-off event |
| **Accounts needed** | None — pre-provisioned KiloClaw instances per team |

## Workshop Goals (from Magnus)

1. **It should be fun** — competition, laughter, team spirit
2. **Meet people from other parts of the company** — cross-functional teams
3. **"Aha moment" about AI** — see agents *do* things, not just talk
4. **Take home ideas** — practical use cases for their own work

---

## Design Inspiration

This workshop draws from proven formats:

| Source | What we borrowed |
|---|---|
| **Microsoft Agent Build-A-Thon** | Teams of 2-5, hands-on labs, working demos, showcase session |
| **ASNT AI Agent Battle** | Competition format, 5-min team demos to judges, pre-event priming |
| **agents&me (Israel)** | Zero-code barrier, "by minute 45 you have a working agent" |
| **GitLab AI Hackathon 2026** | AI lowers barrier so non-technical participants contribute meaningfully |
| **Feet First Events** | Fun elements: game shows, team challenges, creative prompts |
| **Vistage research** | "Put them in a room, give them real data, require working demos" |
| **Innovation Mode** | AI enables everyone to participate, not just technologists |

**Key design decision:** This is NOT a lecture. It's a **guided build-athon** with competition elements. Teams build something real, show it off, and leave with ideas.

---

## Agenda

### 09:00–09:45 | Opening: "This Is Not a Chatbot" (45 min)

**Goal:** Blow people's minds. Set the tone.

**Flow:**
1. **Welcome (5 min)** — Workshop goals, team introductions
2. **Live demo: Kim in action (10 min)** — Magnus talks to Kim (his AI assistant) live on the big screen
   - Kim checks calendar, finds conflicts, drafts reschedule emails
   - Kim researches a topic and produces a structured summary
   - *Key message: "This agent has been running 24/7, with access to tools, files, and memory"*
3. **What is an AI agent? (15 min)** — Interactive explanation
   - Chatbot vs Agent: **agents take action**
   - The Agent Loop: Perceive → Think → Act → Observe → Repeat
   - Tools, memory, skills, guardrails — explained with real examples
4. **Team formation & icebreaker (15 min)** — Meet your team
   - Each team gets a name (AI-generated, using a fun prompt)
   - Quick round: "What's one task you wish you could delegate to an AI?"

### 09:45–10:45 | Exercise 1: "Talk to Your First Agent" (60 min)

**Goal:** Everyone interacts with an agent. First "aha moment."

**Setup:** Each team lead opens their laptop. The team gathers around. The KiloClaw instance is already running with a pre-loaded workspace.

**Flow:**
1. **Guided interaction (20 min)** — Facilitator walks everyone through:
   - "Ask the agent to analyze this codebase"
   - "Ask it to find bugs"
   - "Ask it to explain what it found"
   - Teams watch together, discuss the output
2. **Team challenge (25 min)** — Each team gets a **mystery project** to investigate:
   - The agent reads the code, finds issues, suggests improvements
   - Teams discuss: "Do we agree with the agent? What did it miss?"
   - *This is where the fun starts — teams debate the agent's findings*
3. **Group share (15 min)** — 2-3 teams share what they discovered
   - "What surprised you?"
   - "Did the agent find things you didn't expect?"

*☕ Break 10:45–11:00 (15 min)*

### 11:00–11:45 | Understanding the Platform (45 min)

**Goal:** Demystify how agents work. Connect the magic to engineering.

**Flow:**
1. **Architecture walkthrough (15 min)** — Visual, not technical:
   ```
   Human → Gateway → Agent Session → Tools (files, web, git, calendar) → AI Model
   ```
   - What's in the agent's "brain" (memory, skills, context)
   - What tools it has access to (and what it can't do)
   - Security & guardrails (important for enterprise audience)
2. **Live demo: Agent autonomy (10 min)** — Show an agent doing multi-step work:
   - "Research this topic, write a summary, save it to a file, and commit to git"
   - Watch the agent think, act, and produce output
3. **Interactive Q&A (20 min)** — Open floor
   - Pre-seeded questions if needed: "Can it send emails?" "Does it remember things?" "What if it makes a mistake?"

### 11:45–12:00 | Introduce the Team Challenge (15 min)

**Goal:** Set up the afternoon build session. Build anticipation.

**Flow:**
1. **The Challenge briefing** — Announce the team build competition
2. **Rules explained:**
   - Teams have ~2 hours to build something with their agent
   - Choose from **3 challenge tracks** (see below)
   - Each team presents a 3-minute demo at 14:15
   - Judges score on: creativity, usefulness, teamwork, "wow factor"
3. **Track selection** — Each team picks their challenge
4. **Planning time** — Teams discuss approach before the clock starts

*🍽️ Lunch 12:00–13:00 (60 min)*

### 13:00–14:15 | Exercise 2: Team Build Challenge (75 min)

**Goal:** Teams build something real with agents. Maximum "aha moments."

**Challenge Tracks (teams choose one):**

#### Track A: "Fix Our App" 🐛
A web application with bugs and missing features. Use the agent to:
- Find and fix bugs
- Add a new feature
- Write tests
- *Best for: developer-heavy teams*

#### Track B: "Build a Workflow Agent" 🤖
Design an agent that automates a real work process:
- Examples: expense report assistant, meeting prep agent, onboarding helper
- Teams describe the workflow, the agent builds the logic
- *Best for: mixed teams with domain experts*

#### Track C: "AI Solves Our Problem" 💡
Identify a real problem from your department and use the agent to:
- Research solutions
- Design a prototype
- Present a business case
- *Best for: PM, finance, HR-heavy teams*

**During the build:**
- **Coaches circulate** — 3-4 facilitators walk around helping teams
- **Progress check-ins** — At 30 min and 60 min, facilitator announces time remaining
- **Agent does the heavy lifting** — Team members contribute by:
  - Domain expert: describes the problem and validates solutions
  - Tech-savvy person: drives the laptop, interacts with the agent
  - Others: brainstorm, test outputs, prepare the demo

### 14:15–14:45 | Team Demos & Judging (30 min)

**Goal:** Show off work. Celebrate. Learn from each other.

**Flow:**
1. **Each team gets 3 minutes** — Demo what they built
2. **Judges score** on 4 criteria (1-5 points each):
   - 🎨 **Creativity** — Did they think outside the box?
   - 💼 **Usefulness** — Could this actually help someone at work?
   - 🤝 **Teamwork** — Did everyone contribute?
   - ✨ **Wow factor** — Did it make people go "whoa"?
3. **Prizes** — Fun categories:
   - 🏆 **Best Overall** — Highest score
   - 😂 **Most Fun** — Made everyone laugh
   - 💡 **Most Useful** — Could be shipped tomorrow
   - 🌟 **Best Cross-Team Collaboration** — HR + devs + finance working together

### 14:45–15:00 | Wrap-Up & Next Steps (15 min)

**Goal:** Cement learnings. Point to Monday morning.

**Flow:**
1. **What we learned** — Key takeaways from the day
2. **Your AI journey starts Monday** — How to get your own KiloClaw instance
3. **Feedback** — Quick survey (QR code on screen)
4. **Group photo** — With all the teams and their creations

---

## Preparation Checklist

### 8 Weeks Before (July)
- [ ] Confirm participant count and room setup (large room, good WiFi, projection)
- [ ] Designate 20 team leads (one per team) — they bring laptops
- [ ] Order/provision 20 KiloClaw instances (one per team)
- [ ] Create GitHub organization for the workshop
- [ ] Set up challenge materials (sample apps, workflow templates)

### 4 Weeks Before (August)
- [ ] Send pre-workshop communication to all participants:
  - What to expect (fun, hands-on, no prep needed)
  - Team assignments (deliberately cross-functional)
  - "Bring your curiosity, not your laptop" (except team leads)
- [ ] Send team lead instructions:
  - Bring laptop with terminal access
  - Pre-workshop setup video (10 min) — install nothing, just bookmark the instance URL
- [ ] Test all KiloClaw instances end-to-end
- [ ] Recruit 3-4 judges (mix of leadership + technical)
- [ ] Prepare prize categories and physical prizes

### 2 Weeks Before
- [ ] Final instance check: all 20 instances responding, tokens valid
- [ ] Load challenge materials into each instance workspace
- [ ] Create facilitator guide and timing cards
- [ ] Prepare printed materials:
  - Quick reference cards (one per team)
  - Team scorecards (for judges)
  - Feedback form QR code
- [ ] Dry run the full workshop with a test team

### 1 Week Before
- [ ] Verify venue: internet, projection, sound, seating (teams of 5 around tables)
- [ ] Confirm all instance URLs and access tokens
- [ ] Send reminder to team leads with setup instructions
- [ ] Prepare backup plan: offline instances if WiFi fails
- [ ] Print all materials

### Day Before
- [ ] Final tech check: all instances, projection, WiFi load test
- [ ] Charge backup hotspots
- [ ] Prepare welcome slide with team assignments
- [ ] Set up judging criteria and score sheets

---

## Technical Setup

### KiloClaw Instances (20 total)

| Component | Details |
|---|---|
| **Platform** | KiloClaw (OpenClaw-based) on Fly.io |
| **Model** | Claude (balanced tier) |
| **Access** | Web URL + session token (pre-configured) |
| **Channels** | CLI only for workshop |
| **Workspace** | Pre-loaded with exercises, sample projects, challenge materials |
| **GitHub** | Bot token pre-configured (participants need NO personal GitHub account) |

### Instance Provisioning

```
20 instances × 1 per team
├── Pre-configured agent profile (workshop SOUL.md)
├── Pre-loaded workspace with:
│   ├── Exercise 1: mystery project to analyze
│   ├── Exercise 2 Track A: buggy web app + feature request
│   ├── Exercise 2 Track B: workflow agent templates
│   ├── Exercise 2 Track C: problem-solving framework
│   ├── Quick reference card
│   └── Challenge instructions
└── Session token (valid for workshop day only)
```

### Why No Personal Accounts Needed

- Each KiloClaw instance has its own GitHub token
- All git operations happen through the agent
- Participants interact via the agent's CLI interface
- Results are committed to shared workshop repos
- **Zero friction** — team leads just open a URL and start

### WiFi Requirements

- **20 concurrent CLI sessions** (lightweight, low bandwidth)
- **Projection** for main demos
- **Backup:** 2 mobile hotspots for emergency access

---

## Challenge Materials

### Track A: "Fix Our App"

Pre-loaded: A simple task tracker API (Node.js/Express) with:
- 3 known bugs (null handling, missing validation, race condition)
- 2 feature requests (status filtering, pagination)
- Basic test suite (some tests pass, some fail)

**Teams use the agent to:** find bugs, fix them, add features, run tests, commit.

### Track B: "Build a Workflow Agent"

Template: A workflow description framework where teams:
1. Describe a real work process (e.g., "prepare for customer meetings")
2. Ask the agent to design an automation
3. The agent creates prompts, templates, or scripts
4. Test it with real data

**Teams use the agent to:** design, prototype, and test a workflow automation.

### Track C: "AI Solves Our Problem"

Framework: A structured problem-solving approach where teams:
1. Identify a real pain point from their department
2. Use the agent to research how others have solved it
3. Design a solution concept
4. Prepare a 3-minute pitch

**Teams use the agent to:** research, analyze, and present a solution concept.

---

## Facilitator Guide

### Opening Demo Script

**Magnus + Kim live on screen:**
1. Magnus asks Kim: "What's on my calendar this week?"
2. Kim responds with schedule, highlights conflicts
3. Magnus: "Draft an email to reschedule the Tuesday 2pm meeting"
4. Kim drafts the email, Magnus reviews and approves
5. *Pause for effect*: "This has been running on its own for months."

### Timing Calls

| Time | Call |
|---|---|
| 09:45 | "Exercise 1 starts now — 60 minutes on the clock!" |
| 10:15 | "25 minutes left — make sure everyone has interacted with the agent" |
| 10:30 | "15 minutes left — start discussing your findings" |
| 10:45 | "Break time! See you at 11:00" |
| 13:00 | "Team Challenge starts — 75 minutes to build something amazing!" |
| 13:30 | "45 minutes remaining — are you on track for a demo?" |
| 14:00 | "15 minutes left — finalize your demo!" |
| 14:15 | "Time's up! Demo session starts now" |

### Common Issues & Responses

| Issue | Response |
|---|---|
| "Agent is slow" | "It's thinking, not stalling. Good agents take time to produce quality work." |
| "It made a mistake" | "Great! Now you know — always validate agent output. That's a key lesson." |
| "We don't know what to ask" | "Start with: 'Read this file and tell me what it does.' Build from there." |
| "This is just autocomplete" | "Watch the agent loop — it reads, thinks, acts, checks. That's not autocomplete." |
| "WiFi is slow" | "Switch to backup hotspot. Instance URLs are on your quick reference card." |

---

## Post-Workshop Follow-Up

| When | Action |
|---|---|
| **Day after** | Thank-you email with resources, photos, winning demos |
| **Week after** | "Top 10 things teams built" — internal blog post |
| **Month after** | Survey: who's using agents now? What's blocking others? |
| **Quarter after** | Adoption metrics: instances created, tasks delegated, time saved |

---

## Budget Items

| Item | Est. Cost | Notes |
|---|---|---|
| 20 KiloClaw instances | TBD | Fly.io hosting, 1 day + setup |
| Prizes | ~5,000 SEK | Fun categories, physical prizes |
| Printed materials | ~2,000 SEK | Quick refs, scorecards, posters |
| Backup WiFi | ~1,000 SEK | 2 mobile hotspots |
| **Total** | **~8,000 SEK + hosting** | |
