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
  @Output() endAdd = new EventEmitter();

  currentUser;

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById('0').subscribe(dataLastEmittedFromObserver => {
     this.currentUser = dataLastEmittedFromObserver;
   })
  }

  addPost(rating, body, images, location) {
    let imagesArray = images.split(",");
    let newPost = new Post(this.currentUser, body, imagesArray, this.selectedBeer, location, rating)
    this.postService.savePost(newPost);
    this.currentUser.postList.push(newPost);
    this.userService.updateUser(this.currentUser);
    this.endAdd.emit();

  }

}
