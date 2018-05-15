import { Beer } from './beer.model';

export class Post {
  date: Date;
  constructor(public postedBy: string, public body: string, public images: string[], public beerOption: string, public location: string, public rating: number, public brewery: string) {
    this.date = new Date;
  }
}
