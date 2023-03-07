import express from 'express';
import pool from '../database/Database';


const pizzasRoute = express.Router();

pizzasRoute.get("/", (req, res) => {
    pool.query("SELECT * FROM pizzas", (error, results) => {
        if (error) {
            console.error("Error executing query", error);
            res.status(500).send("Error executing query");
            return;
        }
        res.json(results);
    })
})

export default pizzasRoute;