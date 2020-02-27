import { ISupermarket } from './supermarket.interface';
import HalfOffScraper from '../halfoff-scraper/halfoff-scraper';

export default class Supermarket implements ISupermarket {
    name: String;

    location: String;

    constructor(name: String, location: String) {
      this.name = name;
      this.location = location;
    }

    async getHalfoffItems() {
      const scraper = new HalfOffScraper(this.name);
      try {
        return await scraper.getHalfoffItems();
      } catch (error) {
        console.log(error);
        throw new Error('Error occured while getHalfoffItems');
      }
    }
}
