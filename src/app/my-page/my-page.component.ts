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
  postList;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
     this.userList = dataLastEmittedFromObserver;
     console.log("this.userList" + this.userList);
     this.currentUser= this.userList[0];
     console.log(this.currentUser);
   })

  }

}
