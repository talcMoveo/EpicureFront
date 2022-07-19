/* eslint-disable */
import Restaurant from './restaurant';

class Chef {
  name: string;
  description: string;
  restaurants: Restaurant[];

  constructor(name: string, description: string, restaurants: Restaurant[]) {
    this.name = name;
    this.description = description;
    this.restaurants = restaurants;
  }
}

export default Chef;
