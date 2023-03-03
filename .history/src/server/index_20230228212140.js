const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ejstruppizza',
});

app.get('/drinks', (req, res) => {
  connection.query('SELECT * FROM drinks', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
