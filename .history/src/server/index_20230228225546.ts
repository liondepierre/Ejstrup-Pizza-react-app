import express, { Request, Response } from 'express';
import mysql from 'mysql';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ejstruppizza'
});


const app = express();

app.get('/drinks', (req: Request, res: Response) => {
  const sql = 'SELECT * FROM drinks';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get("/create", (req: Request, res: Response) => {
  const sql = 'INSERT INTO drinks {}'
})

app.listen(5000, () => console.log('Server started on port 5000'));

