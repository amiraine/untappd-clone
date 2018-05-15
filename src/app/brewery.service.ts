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

  addNewBeerToBrewery(breweryId: string, newBeer: Beer) {
    this.getBreweryById(breweryId).subscribe(dataLastEmittedFromObserver => {
      this.breweryTarget = dataLastEmittedFromObserver;
      console.log(this.breweryTarget + "this is the brewery target");
      console.log(this.breweryTarget.beers + "beers array in target");
    });
    this.breweryTarget.beers.push(newBeer);
  }

}
