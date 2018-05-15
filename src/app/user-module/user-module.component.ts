import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.css'],
  providers: [UserService]
})
export class UserModuleComponent implements OnInit {
  userList;
  currentUser;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.userList = dataLastEmittedFromObserver;
      this.currentUser= this.userList[0];
    })

  }

}
