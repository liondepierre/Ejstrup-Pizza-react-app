import { createConnection } from 'mysql2/promise';

const connection = await createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ejstruppizza',
});

export default connection;