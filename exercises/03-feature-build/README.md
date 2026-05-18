# Exercise 3: Build a Feature with an Agent

**Time:** 45 minutes  
**Mode:** Pairs (driver + navigator)

## Objective

Use the Agentic Engineering pattern (Research → Plan → Build → Validate) to complete a real feature request with an AI agent.

## Scenario

The Task Tracker API (from Exercise 2) needs two changes:

### Bug Report
> "When I send a PUT request with an empty body `{}`, the task's `id` gets overwritten as `undefined` and I can no longer find the task."

### Feature Request
> "We need to filter tasks by status. Add a query parameter: `GET /api/tasks?status=open` should return only open tasks."

## Instructions

### Phase 1: Research (10 min)

```bash
kilo run --auto "Read the Task Tracker API source code in exercises/03-feature-build/webapp/. 
Find the bug in the PUT endpoint and explain what causes it."
```

### Phase 2: Plan (5 min)

```bash
kilo run --auto "Create a plan to:
1. Fix the PUT endpoint bug
2. Add status filtering to GET /api/tasks

For each change, describe what file to modify and what the change should be."
```

### Phase 3: Build (20 min)

```bash
kilo run --auto "Implement both changes:
1. Fix the PUT endpoint so empty body doesn't overwrite the id
2. Add ?status= query parameter filtering to GET /api/tasks

Update the code and show me a diff of your changes."
```

### Phase 4: Validate (10 min)

```bash
kilo run --auto "Write test cases for:
1. PUT with empty body preserves all existing fields
2. GET /api/tasks?status=open returns only open tasks
3. GET /api/tasks?status=closed returns only closed tasks
4. GET /api/tasks without status returns all tasks"
```

## Success Criteria

- [ ] The bug is fixed (PUT with empty body preserves task id and fields)
- [ ] Status filtering works for all valid statuses
- [ ] Invalid status parameter returns 400 or ignores gracefully
- [ ] Tests pass
- [ ] Code is committed with a descriptive message

## Discussion Questions

1. How did the agent handle the bug vs the feature request differently?
2. Did you need to correct or guide the agent at any point?
3. How does this compare to how you'd do this without an agent?
