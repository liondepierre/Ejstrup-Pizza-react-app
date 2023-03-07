import mysql from 'mysql';


//Database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ejstruppizza'
  });


  export default connection;
  