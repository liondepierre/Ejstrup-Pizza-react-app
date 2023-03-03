import mysql from 'mysql';
import express from 'express';
import cors from 'cors';

const app = express();

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ejstruppizza'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
  } else {
    console.log('Connected to database!');
  }
});

// Set up middleware to handle CORS
app.use(cors());

// Set up a route to retrieve data from the drinks table
app.get('/drinks', (req, res) => {
  connection.query('SELECT * FROM drinks', (err, results) => {
    if (err) {
      console.error('Error retrieving data from database: ', err);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
