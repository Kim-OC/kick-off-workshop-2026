# Mystery Project — Task Tracker API

A small REST API built with Node.js and Express.

## package.json

```json
{
  "name": "task-tracker-api",
  "version": "1.0.0",
  "description": "Simple task tracking API",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.7.0",
    "supertest": "^6.3.3"
  }
}
```

## src/index.js

```javascript
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage
let tasks = [];

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Get single task
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// Create task
app.post('/api/tasks', (req, res) => {
  const { title, description, priority } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const task = {
    id: uuidv4(),
    title,
    description: description || '',
    priority: priority || 'medium',
    status: 'open',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(task);
  res.status(201).json(task);
});

// Update task
app.put('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[index] = {
    ...tasks[index],
    ...req.body,
    id: tasks[index].id,
    updatedAt: new Date().toISOString()
  };

  res.json(tasks[index]);
});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Task Tracker API running on port ${PORT}`);
});

module.exports = app;
```

## src/__tests__/tasks.test.js

```javascript
const request = require('supertest');
const app = require('../index');

describe('Task API', () => {
  test('GET /api/tasks returns empty array initially', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/tasks creates a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test task', priority: 'high' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test task');
    expect(res.body.id).toBeDefined();
  });

  test('POST /api/tasks requires title', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ description: 'No title' });
    expect(res.status).toBe(400);
  });
});
```

## Intentional Issues (for facilitator)

1. **No input sanitization** — priority field accepts any string, no enum validation
2. **No pagination** — GET /tasks returns all tasks, will be slow with many records
3. **No authentication** — anyone can create/update/delete tasks
4. **No error handling middleware** — unhandled exceptions return HTML 500
5. **Race condition** — concurrent requests could cause data issues with array operations
6. **Tests share state** — tests run in sequence and share the `tasks` array, order matters
