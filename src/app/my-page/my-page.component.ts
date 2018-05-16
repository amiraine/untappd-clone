import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { BeerService } from '../beer.service';
import { BreweryService } from '../brewery.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
  providers: [UserService, PostService, BeerService, BreweryService]
})
export class MyPageComponent implements OnInit {
  userList;
  currentUser;
  postList;
  userPostList: Array<object> = new Array();
  beerList;
  edit: boolean = false;
  selectedPost;
  breweryList;
  userPost;

  constructor(private userService: UserService, private postService: PostService, private beerService: BeerService, private breweryService: BreweryService, private router: Router) { }

  ngOnInit() {

    this.breweryService.getBrewery().subscribe(dataLastEmittedFromObserver => {
      this.breweryList = dataLastEmittedFromObserver;
    })
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
    this.userPost = new Post("sassyusername", "", [""], "", "", 0, "")
  }

  getBrewery(post) {
    this.beerList.forEach((beer) => {
      if(post.beerOption === beer.name){
        console.log(beer.brewery);
        return beer.brewery;
      }
    })
  }
  createPost(body, location) {
    this.userPost.body = body;
    this.userPost.location = location;
    console.log(this.userPost.rating);
    this.postService.savePost(this.userPost);
    this.currentUser.beersDrank.push(this.userPost.beerOption);
    this.currentUser.wishlist.forEach((beer) => {
      if(beer === this.userPost.beerOption){
        let index = this.currentUser.wishlist.indexOf(beer);
        this.currentUser.wishlist.splice(index, 1);
      }
    })
    this.userService.updateUser(this.currentUser);
    this.router.navigate(['mypage']);

  }

  editPost(post) {
    this.selectedPost = post;
  }

  endEdit(){
    this.selectedPost = null;
    this.router.navigate(['mypage']);
  }

}
