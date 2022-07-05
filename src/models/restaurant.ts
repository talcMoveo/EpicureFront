import Chef from "./chef";


class Restaurant {
  // id: string;
  name: string;
  photoSrc: string;
  chef: Chef;
  rating: number;
  // cusine: // implement using enum
  // dishes: [] = [];
  
    constructor(name: string, photoSrc: string, chef: Chef, rating: number) {
      this.name = name;
      this.photoSrc = photoSrc;
      this.chef = chef;
      this.rating = rating;
    }
  }
  
  export default Restaurant;