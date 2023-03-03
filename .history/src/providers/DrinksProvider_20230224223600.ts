import mysql from 'mysql';

export default interface IDrink {
  id: number;
  price: number;
  size: string;
  brand: string;
}

export class DrinksProvider {

  constructor() {

    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "databaseTest"
    });

    connection.connect((err: mysql.MysqlError) => {
      if (err) throw err;
      console.log("connected!")
    })
  }
}



