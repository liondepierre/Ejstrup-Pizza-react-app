import mysql from 'mysql';

export default interface IDrink {
    id: string;
    price: number;
    size: string;
    brand: string;
}


export default class DrinksProvider {

    private mySqlTest = require("mysql");

    constructor() {
        this.mySqlTest.createConnection({
            host: "localhost",
            user: "root",
            database: "ejstruppiza"
        });


        this.mySqlTest.connect(function (err: any) {
            if (err) throw err;
            console.log("Connected!");
        });
    }





}


// private connection: mysql.Connection;

// constructor() {
//     this.connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         database: "ejstruppizza",
//     })
// }


// getDrinks = (): Promise <IDrink[]> => {
//     return new Promise((resolve, reject) => {
//         this.connection.query("SELECT * FROM drinks", (error, results) => {
//             if (error) {
//                 reject(error)
//             } else {
//                 resolve(results)
//             }
//         });
//     })
// }