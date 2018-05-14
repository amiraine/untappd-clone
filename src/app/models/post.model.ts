import { Beer } from './beer.model';

export class Post {
  date: Date;
  constructor(public body: string, public images: string[], public beerOption: Beer, public location: string) {
    this.date = new Date;
  }
}
