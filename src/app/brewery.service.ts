import { Injectable } from '@angular/core';
import { Brewery } from './models/brewery.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Beer } from './models/beer.model';

@Injectable()
export class BreweryService {
  breweryList;
  breweryTarget;
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

  updateBrewery(brewery){
   var entryInFirebase = this.getBreweryById(brewery.$key);
   entryInFirebase.update(brewery);
 }

}
