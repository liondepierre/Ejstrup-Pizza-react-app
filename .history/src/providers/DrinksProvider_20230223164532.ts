import mySql from 'mysql';
import { constructor } from 'react';

export default interface IDrink {
    id: string;
    price: number;
    size: string;
    brand: string;
}


export default class DrinksProvider {

    private connect: mySql.Connection;

    constructor() {
        this.connect = mySql.createConnection({
            host: "localhost",
            user: "root",
            database: "ejstruppizza",
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