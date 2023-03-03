import express from 'express';
import connection from './db';

const app = express();
const port = process.env.PORT || 4000;

app.get('/api/drinks', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM drinks');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
