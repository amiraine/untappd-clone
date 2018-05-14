import { Beer } from './beer.model';

export class Brewery {
  constructor(public name: string, public beers: Beer[], public city: string, public state: string, public address: string, public zip: number) {}
}
