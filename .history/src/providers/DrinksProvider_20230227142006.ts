import mysql from 'mysql2/promise';
import IDrink from '../models/IDrink';


export class DrinksProvider {

  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "ejstruppiza"
  });
  


}



