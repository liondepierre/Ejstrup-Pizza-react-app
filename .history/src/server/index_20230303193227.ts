import express, { Request, Response } from 'express';
import mysql from 'mysql';
import cors from 'cors';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ejstruppizza'
});


const app = express();
app.use(cors({
  origin: "http://localhost:3000"
}))


app.get('/drinks', (req: Request, res: Response) => {
  const sql = 'SELECT * FROM drinks';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});



app.listen(5000, () => console.log('Server started on port 5000'));

