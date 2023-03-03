import express, { Request, Response } from 'express';
import mysql from 'mysql2';

export class DrinksProvider {
  private app: express.Application;
  private pool: mysql.Pool;

  constructor() {
    this.app = express();
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ejstruppizza'
    });
  }

  public async start(): Promise<void> {
    this.configureRoutes();
    this.listen();
  }

  private configureRoutes(): void {
    this.app.get('/drinks', this.handleGetDrinks);
  }

  private handleGetDrinks = (req: Request, res: Response) => {
    this.pool.query('SELECT * FROM Drinks', (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching drinks');
      } else {
        res.json(results);
      }
    });
  };

  private listen(): void {
    this.app.listen(8000, () => {
      console.log('Server started on port 8000');
    });
  }
}
