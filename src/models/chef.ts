import Restaurant from "./restaurant";

class Chef {
    // id: string;
    // photoSrc: string;
    name: string;
    description: string;
    restaurants: Restaurant[];
  
    constructor(name: string, description: string, restaurants: Restaurant[]) {
      this.name = name;
      this.description = description;
      this.restaurants = restaurants;
      // this.photoSrc = photoSrc;
    }
  }
  
  export default Chef;