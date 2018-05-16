import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  postList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
      this.postList = database.list('posts');
   }

  getPosts() {
    return this.postList;
  }

  getPostById(postId) {
    return this.database.object('posts/' + postId);
  }

  savePost(newPost: Post) {
    this.postList.push(newPost);
  }

  deletePost(outPost) {
    let entryInFirebase = this.getPostById(outPost.$key);
    entryInFirebase.remove();
  }

  updatePost(post){
   var entryInFirebase = this.getPostById(post.$key);
   entryInFirebase.update(post);
 }

}
