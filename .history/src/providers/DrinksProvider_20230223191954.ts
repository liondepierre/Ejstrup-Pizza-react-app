import mysql from 'mysql';
export default interface IDrink {
  id: number;
  price: number;
  size: string;
  brand: string;
}

export class DrinksProvider {

  constructor() {
      console.log("Test")
  }


}



