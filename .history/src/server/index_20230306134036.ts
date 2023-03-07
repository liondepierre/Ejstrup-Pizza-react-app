import express, { Request, Response } from 'express';
import cors from 'cors';
import db from '../database/Database'
import router from '../Routes/Routes'

//Server
const app = express();
const port: number = 5000;

app.use(cors({
  origin: "http://localhost:3000"
}))


 //Routes
 app.get('/drinks', (req: Request, res: Response) => {
  const sql = 'SELECT * FROM drinks';
  db.query(sql, (error, results) => {
      if (error) throw error;
      res.send(results);
  });
});



app.listen(port, () => console.log(`Server started on port ${port}`));

