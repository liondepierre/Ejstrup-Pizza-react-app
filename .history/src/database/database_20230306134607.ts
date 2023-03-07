import mysql from 'mysql';

//Database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ejstruppizza'
  });


export default pool;
  