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
  userPostList: Array<object> = new Array();
  beerList;
  edit: boolean = false;
  selectedPost;
  constructor(private userService: UserService, private postService: PostService, private beerService: BeerService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.userList = dataLastEmittedFromObserver;
      this.currentUser= this.userList[0];
      this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
        this.postList = dataLastEmittedFromObserver;
        this.postList.forEach((post) => {
          if(post.postedBy === this.currentUser.name){
            this.userPostList.push(post);
          }
        })
      })
    })
    this.beerService.getBeers().subscribe(dataLastEmittedFromObserver => {
      this.beerList = dataLastEmittedFromObserver;
    })
  }

  getBrewery(post) {
    this.beerList.forEach((beer) => {
      if(post.beerOption === beer.name){
        console.log(beer.brewery);
        return beer.brewery;
      }
    })
  }

  editPost(post) {
    this.edit=true;
    this.selectedPost = post;
  }

  endEdit(){
    this.edit=false;
    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      this.postList = dataLastEmittedFromObserver;
      this.postList.forEach((post) => {
        this.userPostList = [];
        if(post.postedBy === this.currentUser.name){
          this.userPostList.push(post);
        }
      })
    })

  }

}
