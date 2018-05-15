import { Beer } from './beer.model';
import { User } from './user.model';

export class Post {
  date: Date;
  constructor(public postedBy: User, public body: string, public images: string[], public beerOption: Beer, public location: string, public rating: number) {
    this.date = new Date;
  }
}
