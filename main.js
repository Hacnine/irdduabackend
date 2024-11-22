
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3001;
const cors = require('cors');
app.use(cors());

// Path to the SQLite database file
const dbPath = path.join(__dirname, 'dua_main.sqlite');

// Create a connection to the SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Endpoint to fetch all categories
app.get('/categories', (req, res) => {
  const query = 'SELECT * FROM category';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching categories:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// Endpoint to fetch all subcategories
app.get('/subcategories', (req, res) => {
  const query = 'SELECT * FROM sub_category';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching subcategories:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// Endpoint to fetch all duas
app.get('/duas', (req, res) => {
  const query = 'SELECT * FROM dua';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching duas:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Close the database connection gracefully on process termination
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing the database connection:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});
