import Restaurant from "./restaurant";



class Chef {
    // id: string;
    name: string;
    photoSrc: string;
    description: string;
    restaurants: Restaurant[] = [];
  
    constructor(name: string, photoSrc: string, description: string) {
      this.name = name;
      this.photoSrc = photoSrc;
      this.description = description;
    }
  }
  
  export default Chef;