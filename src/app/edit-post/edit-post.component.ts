import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService, UserService]
})
export class EditPostComponent implements OnInit {
  @Input() selectedPost;
  @Output() endEdit = new EventEmitter();
  userList;
  currentUser;

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.userList = dataLastEmittedFromObserver;
      this.currentUser= this.userList[0];
    })
  }

  doneEdit() {
    this.postService.updatePost(this.selectedPost);
    this.endEdit.emit();
  }

  deletePost() {
    let index = this.currentUser.beersDrank.indexOf(this.selectedPost.beerOption)
    this.currentUser.beersDrank.splice(index,1);
    this.postService.deletePost(this.selectedPost);
    this.userService.updateUser(this.currentUser);
    this.endEdit.emit();
  }

}
