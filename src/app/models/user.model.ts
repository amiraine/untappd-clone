import { Beer } from './beer.model';
import { Post } from './post.model';

export class User {
  constructor(public name: string, public beersDrank: Beer[], public wishList: Beer[], public postList: Post[]) {}
}
