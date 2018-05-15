import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
  providers: [UserService, PostService, BeerService]
})
export class MyPageComponent implements OnInit {
  userList;
  currentUser;
  postList;
  userPostList;
  beerList;
  constructor(private userService: UserService, private postService: PostService, private beerService: BeerService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.userList = dataLastEmittedFromObserver;
      this.currentUser= this.userList[0];
    })
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      this.postList = dataLastEmittedFromObserver;
    })
    this.currentUser.postList.forEach((beerName) => {
      this.postList.forEach((post) => {
        if(post.beerOption === beerName){
          this.userPostList.push(post);
        }
      })
    })
  }

  getBeer(post) {
    this.beerList.forEach((beer) => {
      if(post.beerOption === beer.name){
        return beer;
      }
    })
  }

}
