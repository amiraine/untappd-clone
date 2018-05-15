import { Beer } from './beer.model';
import { Post } from './post.model';

export class User {
  constructor(public name: string, public beersDrank: string[], public wishList: string[], public postList: Post[]) {}
}
