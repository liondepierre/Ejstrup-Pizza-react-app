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


app.use('/drinks', router)

app.listen(port, () => console.log(`Server started on port ${port}`));

