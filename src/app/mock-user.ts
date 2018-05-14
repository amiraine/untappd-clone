import { Beer } from './models/beer.model';
import { Post } from './models/post.model';
import { User } from './models/user.model';
import { POSTS } from './mock-posts';

let beer1 = new Beer('Superfuzz', 'Elysian Brewing', 'Blood Orange Pale Ale', 6.4, 45, 4.3, 'this is the description', 'this is the notes');

let beer2 = new Beer('Citrus Mistress', 'Hop Valley Brewing', 'IPA', 6.3, 80, 4.3, 'this is the description', 'this is the notes');

export const USERS: User[] = [
  new User('sassyusername', [beer1], [beer2], POSTS)
]
