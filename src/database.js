// src/db.js
var Pool = require('pg-pool');
require('dotenv').config();

// Connection configuration
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// Export the pool to use it in other parts of your application
module.exports = pool;
