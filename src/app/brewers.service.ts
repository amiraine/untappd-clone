import { Injectable } from '@angular/core';
import { Brewery } from './models/brewery.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BrewerService {
  brewerList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
      this.brewerList = database.list('brewers');
   }

  getbrewers() {
    return this.brewerList;
  }

  getbrewersById(brewerId) {
    return this.database.object('brewers/' + brewerId);
  }

}
