import express from 'express';
import mysql from 'mysql';

const app = express();


app.listen(5000, () => {
  console.log('Server started on port 5000');
});