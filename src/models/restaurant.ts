import Chef from "./chef";
import { features } from "./featuresEnum";


class Restaurant {
    // id: string;
    name: string;
    photoSrc: string;
    chef: Chef;
    rating: number;
    // cusine: // implement using enum
    dishes: [] = [];
    features: features[];
  
    constructor(name: string, photoSrc: string, chef: Chef, rating: number, features: features[] = []) {
      this.name = name;
      this.photoSrc = photoSrc;
      this.chef = chef;
      this.rating = rating;
      this.features = features;
    }
  }
  
  export default Restaurant;