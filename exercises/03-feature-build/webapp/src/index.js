// Task Tracker API — Ida Infront Kick-Off 2026, Challenge Track A
// This app has INTENTIONAL BUGS. Your job: find and fix them.

const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage
let tasks = [];

// GET all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// GET single task by ID
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// CREATE a new task
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

// UPDATE a task
// BUG 1: If the request body is empty {}, the id gets overwritten as undefined
app.put('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[index] = {
    ...req.body,          // <-- This overwrites id if body doesn't include it
    updatedAt: new Date().toISOString()
  };

  res.json(tasks[index]);
});

// DELETE a task
app.delete('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

// BUG 3: No error handling middleware — unhandled exceptions return HTML 500

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Task Tracker API running on port ${PORT}`);
});

module.exports = app;
