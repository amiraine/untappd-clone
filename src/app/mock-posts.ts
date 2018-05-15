import { Post } from './models/post.model';
import { Beer } from './models/beer.model';
import { USERS} from './mock-user'

let beer = new Beer('Willamette Valley Pinot Noir', 'Boedecker Cellars', 'Pinot Noir', 14, 0, 4.3, 'this is the description', 'this is the notes');

export const POSTS: Post[] = [
  new Post(USERS[0], 'yaaay beer is delicious you guys!', ['no image yet'], beer, 'Belmont Inn'),
  new Post(USERS[0], 'this is totally a different post', ['no image yet'], beer, 'Chopsticks'),
  new Post(USERS[0], 'I am so good at fake posts', ['no image yet'], beer, 'Swift Lounge')
]
