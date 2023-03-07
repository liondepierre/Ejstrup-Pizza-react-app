import express, { Request, Response } from 'express';
import cors from 'cors';
import drinksRouter from '../Routes/DrinksRoute'
import pizzasRouter from '../Routes/PizzasRoute'
//Server
const app = express();
const port: number = 5000;

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use("/drinks", drinksRouter)
app.use("/pizzas", pizzasRouter)


app.listen(port, () => console.log(`Server started on port ${port}`));

