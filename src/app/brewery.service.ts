import { Injectable } from '@angular/core';
import { Brewery } from './models/brewery.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BreweryService {
  breweryList;
  constructor(private database: AngularFireDatabase) {
      this.breweryList = database.list('brewers');
      console.log(this.breweryList)
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
