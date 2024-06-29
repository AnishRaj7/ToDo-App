// src/app.js
require("dotenv").config();
const express = require('express');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');

const app = express();
const pool = require('./database'); // Import the pool instance

const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
