import { Beer } from './models/beer.model';
import { Brewery } from './models/brewery.model';

let beer1 = new Beer('Superfuzz', 'Elysian Brewing', 'Blood Orange Pale Ale', 6.4, 45, 4.3, 'this is the description', 'this is the notes');

let beer2 = new Beer('Citrus Mistress', 'Hop Valley Brewing', 'IPA', 6.3, 80, 4.3, 'this is the description', 'this is the notes');

export const BREWERS: Brewery[] = [
  new Brewery('Elysian', [beer1], 'Seattle', 'WA', '1221 E Pike St', 98122),
  new Brewery('Hop Valley Brewing', [beer2], 'SpringField', 'OR', '980 Kruse Way', 97477)
]
