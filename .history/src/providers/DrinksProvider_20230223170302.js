import mySql from 'mysql';

export default interface IDrink {
    id: string;
    price: number;
    size: string;
    brand: string;
}


export default class DrinksProvider {

    private connection: mySql.Connection = require("mysql");


    constructor() {
        this.connection = mySql.createConnection({
            host: "localhost",
            user: "root",
            database: "ejstruppizza",
        })
    }
    getDrinks = (): Promise<IDrink[]> => {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT * FROM drinks", (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            });
        })
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


// getDrinks = (): Promise<IDrink[]> => {
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