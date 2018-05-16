import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  userList;
  currentUser;
  postList;
  userPostList: Array<object> = new Array();
  beerList;
  constructor() { }

  ngOnInit() {
  }

}
