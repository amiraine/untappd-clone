import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { Brewery } from '../models/brewery.model';
import { BreweryService } from '../brewery.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [PostService, UserService, BreweryService]
})
export class AddPostComponent implements OnInit {
  @Input() add: boolean;
  @Input() selectedBeer;
  @Input() currentUser;
  @Output() endAdd = new EventEmitter();

  newPost: Post;
  breweryList;


  constructor(private postService: PostService, private userService: UserService, private breweryService: BreweryService) { }

  ngOnInit() {
    this.newPost = new Post(this.currentUser.name, "", [""], this.selectedBeer.name, "", 0, this.selectedBeer.brewery)
  }

  createPost(body, images, location) {
    let imagesArray = images.split(",");
    this.newPost.body = body;
    this.newPost.images = imagesArray;
    this.newPost.location = location;
    this.postService.savePost(this.newPost);
    this.currentUser.beersDrank.push(this.selectedBeer.name);
    this.currentUser.wishlist.forEach((beer) => {
      if(beer === this.selectedBeer.name){
        let index = this.currentUser.wishlist.indexOf(beer);
        this.currentUser.wishlist.splice(index, 1);
      }
    })
    this.userService.updateUser(this.currentUser);
    this.endAdd.emit();

  }

}
