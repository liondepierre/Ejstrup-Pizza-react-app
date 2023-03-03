import { createConnection } from 'mysql2/promise';

const connection = await createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database',
});

export default connection;