import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  userList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
      this.userList = database.list('users');
   }

  getUsers() {
    return this.userList;
  }

  getUserById(userId) {
    return this.database.object('users/' + userId);
  }

  updateUser(user){
   var entryInFirebase = this.getUserById(user.$key);
   entryInFirebase.update(user);
 }

  saveUser(newUser: User) {
    this.userList.push(newUser);
  }

  deleteBeer(outUser) {
    let entryInFirebase = this.getUserById(outUser.$key);
    entryInFirebase.remove();
  }

}
