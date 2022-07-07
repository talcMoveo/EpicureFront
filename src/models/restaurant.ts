import Chef from "./chef";

class Restaurant {
  // id: string;
  // cusine: // implement using enum
  // dishes: [] = [];
  name: string;
  photoSrc: string;
  chef: string;
  rating: number;
  
    constructor(name: string, photoSrc: string, chef: string, rating: number) {
      this.name = name;
      this.photoSrc = photoSrc;
      this.chef = chef;
      this.rating = rating;
    }
  }
  
  export default Restaurant;