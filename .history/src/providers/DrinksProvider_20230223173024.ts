import mysql from 'mysql';
export default interface IDrink {
  id: number;
  price: number;
  size: string;
  brand: string;
}

export class DrinksProvider {

  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'ejstruppizza',
    });
  }

  getDrinks(): Promise<IDrink[]> {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM drinks', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}



