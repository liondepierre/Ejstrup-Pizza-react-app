import mysql from 'mysql';

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

export default connection;
