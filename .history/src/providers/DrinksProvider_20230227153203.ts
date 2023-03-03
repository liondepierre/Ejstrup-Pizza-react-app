import mysql from 'mysql';


export class DrinksProvider {

  constructor() {

    const k = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "ejstruppiza",
    });

    k.connect((error: mysql.MysqlError) => {
      if (error) throw error;
      console.log("Connected")

    })

  }


 



}



