import express from 'express';
import db from './db.js';

const app = express();

app.get('/users', (req, res) => {
  db.query('SELECT * FROM drinks', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Error executing MySQL query');
      return;
    }
    res.json(results);
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
