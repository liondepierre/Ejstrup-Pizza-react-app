export class DrinksProvider {

private express = require("express");

private app = this.express();


constructor() {
  this.app.listen(3001, () => {
    console.log("connected")
  })
}

}



