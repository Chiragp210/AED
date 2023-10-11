
//USE POSTMAN or THUNDER CLIENT to Execute This Program.
const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, ...updatedTask };
    }
    return task;
  });

  res.json(updatedTask);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(204).end();
});

app.listen(4700, () => {
  console.log(`Server is running on http://localhost:${4700}`);
});