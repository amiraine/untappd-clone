import { Pipe, PipeTransform } from '@angular/core';
import { BreweryService } from './brewery.service';
import { BeerService } from './beer.service';

@Pipe ({
  name: 'filter',
  pure: false
})

export class FilterListPipe implements PipeTransform {
  transform(items: any[],parameter:string):any {
    if(!parameter) {
      return items;
    }
    let beers = [];
    for(var i = 0; i<items.length; i++){
      if(items[i].brewery === parameter){
        beers.push(items[i]);

      }
    }
    return beers;
  }
}
