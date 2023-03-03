import express from 'express';
import db from '../server/db';

const router = express.Router();

router.get('/drinks', (req, res) => {
  db.query('SELECT * FROM drinks', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

export default router;
