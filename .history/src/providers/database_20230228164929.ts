import mysql from 'mysql';


export class Datadase {

  constructor() {


    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ejstruppizza',
    });

    connection.connect((err) => {
      if (err) throw err;
      console.log('Connected to database');
    });


  }

}