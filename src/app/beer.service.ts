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

  getBeerById(beerId) {
    return this.database.object('beers/' + beerId);
  }

  saveBeer(newBeer: Beer) {
    this.beerList.push(newBeer);
  }

  deleteBeer(outBeer) {
    let entryInFirebase = this.getBeerById(outBeer.$key);
    entryInFirebase.remove();
  }

}
