import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  userList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
      this.userList = database.list('users');
   }

  getusers() {
    return this.userList;
  }

  getusersById(userId) {
    return this.database.object('users/' + userId);
  }

}
