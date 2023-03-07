import express from 'express';
import connection from '../database/Database';


const router = express.Router();


 //Routes
 router.get('/drinks', (req: any, res: any) => {
    const sql = 'SELECT * FROM drinks';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        res.send(results);
    });
  });
  
