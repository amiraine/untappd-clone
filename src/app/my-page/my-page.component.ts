import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
  providers: [UserService]
})
export class MyPageComponent implements OnInit {
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
