export class Database {

    private express: any = require("express");
    private app: any = this.express();
    private mySql: any = require("mysql");

    constructor() {
        this.app.listen(3001, () => {
            console.log("ekorpgekoprgepok")
        })
    }
}

