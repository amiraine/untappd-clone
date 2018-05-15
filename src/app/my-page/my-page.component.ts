import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
  providers: [UserService]
})
export class MyPageComponent implements OnInit {
  currentUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById('0').subscribe(dataLastEmittedFromObserver => {
     this.currentUser = dataLastEmittedFromObserver;
   })
  }

}
