import { Injectable } from '@angular/core';
import { Beer } from './models/beer.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BeerService {
  beerList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
      this.beerList = database.list('beers');
   }

  getBeers() {
    return this.beerList;
  }

  getBeersById(beerId) {
    return this.database.object('beers/' + beerId);
  }

}
