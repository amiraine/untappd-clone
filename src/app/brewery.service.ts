import { Injectable } from '@angular/core';
import { Brewery } from './models/brewery.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BreweryService {
  breweryList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
      this.breweryList = database.list('brewers');
   }

  getBrewery() {
    return this.breweryList;
  }

  getBreweryById(breweryId) {
    return this.database.object('brewers/' + breweryId);
  }

  saveBrewery(newBrewery: Brewery) {
    this.breweryList.push(newBrewery);
  }

  deleteBeer(outBrewery) {
    let entryInFirebase = this.getBreweryById(outBrewery.$key);
    entryInFirebase.remove();
  }

}
