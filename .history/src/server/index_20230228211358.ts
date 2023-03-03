import express, { Request, Response } from 'express';
import mysql from 'mysql';

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
  database: 'ejstruppizza',
});

app.get('/drinks', (req: Request, res: Response) => {
  connection.query('SELECT * FROM drinks', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
