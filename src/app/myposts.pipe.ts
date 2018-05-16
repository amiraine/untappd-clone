import { Pipe, PipeTransform } from '@angular/core';
import { BreweryService } from './brewery.service';
import { BeerService } from './beer.service';

@Pipe ({
  name: 'myposts',
  pure: false
})

export class MyPostPipe implements PipeTransform {
  transform(items: any[],parameter:string):any {
    if(!parameter) {
      return items;
    }
    let myPosts = [];
    for(var i = 0; i<items.length; i++){
      if(items[i].postedBy === parameter){
        myPosts.push(items[i]);

      }
    }
    return myPosts;
  }
}
