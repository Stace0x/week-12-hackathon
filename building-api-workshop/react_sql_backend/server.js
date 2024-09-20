const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a new PostgreSQL client pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Route to fetch all data from the PostgreSQL table
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mytable');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Route to insert new data into the PostgreSQL table
app.post('/api/data', async (req, res) => {
  const { name, value } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO mytable (name, value) VALUES ($1, $2) RETURNING *',
      [name, value]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
