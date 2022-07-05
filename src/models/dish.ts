import { features } from "./featuresEnum";

class Dish {
    name: string;
    photoSrc: string;
    ingredients: string[];
    price: number;
    features: features[];

    constructor(name: string, photoSrc: string, ingredients: string[], price: number = -1, features: features[] = []) {
      this.name = name;
      this.photoSrc = photoSrc;
      this.ingredients = ingredients;
      this.features = features;
      // what to do if no price?
      this.price = price
    }
  }
  export default Dish;