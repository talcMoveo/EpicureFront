class Dish {
  name: string;
  photoSrc: string;
  ingredients: string[];
  price: number;
  features: string[];

  constructor(name: string, photoSrc: string, ingredients: string[], price: number = -1, features: string[] = []) {
    this.name = name;
    this.photoSrc = photoSrc;
    this.ingredients = ingredients;
    this.features = features;
    this.price = price;
  }
}

export default Dish;
