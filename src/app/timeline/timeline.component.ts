import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostService } from '../post.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [UserService, PostService]
})
export class TimelineComponent implements OnInit {
  userList;
  currentUser;
  postList;

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      this.postList = dataLastEmittedFromObserver;
    })
  }

}
