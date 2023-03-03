import mysql from 'mysql';

export default interface IDrink {
  id: number;
  price: number;
  size: string;
  brand: string;
}

export class DrinksProvider {

  constructor() {

    const connection: mysql.Connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "ejstrupPizza"
    });

    connection.connect((err: mysql.MysqlError) => {
      if (err) throw err;
      console.log("connected!")
    })
  }
}



