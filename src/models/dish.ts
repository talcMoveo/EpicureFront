/* eslint-disable */
class Dish {
  name: string;
  img: string;
  ingredients: string[];
  price: number;
  features: string[];

  constructor(name: string, img: string, ingredients: string[], price: number = -1, features: string[] = []) {
    this.name = name;
    this.img = img;
    this.ingredients = ingredients;
    this.features = features;
    this.price = price;
  }
}

export default Dish;
