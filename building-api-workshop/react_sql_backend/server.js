const express = require('express');
const pg = require('postgres');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create connection to SQL Database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: 'password', // Your MySQL password
  database: 'mydatabase', // Database name
});

// Connect to database
db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define a simple GET route
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM mytable', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Define a POST route for adding data
app.post('/api/data', (req, res) => {
  const { name, value } = req.body;
  db.query('INSERT INTO mytable (name, value) VALUES (?, ?)', [name, value], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ message: 'Data added successfully!' });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
