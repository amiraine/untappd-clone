import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [PostService, UserService]
})
export class AddPostComponent implements OnInit {
  @Input() add: boolean;
  @Input() selectedBeer;
  @Input() currentUser;
  @Output() endAdd = new EventEmitter();


  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {

  }

  addPost(rating, body, images, location) {
    let imagesArray = images.split(",");
    let newPost = new Post(this.currentUser.name, body, imagesArray, this.selectedBeer.name, location, rating);
    this.postService.savePost(newPost);
    this.currentUser.postList.push(newPost.beerOption);
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
