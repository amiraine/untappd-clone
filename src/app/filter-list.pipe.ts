import { Pipe, PipeTransform } from '@angular/core';
import { BreweryService } from './brewery.service';

@Pipe ({
  name: 'filter',
  pure: false
})

export class FilterListPipe implements PipeTransform {
  breweryList;
  transform(items: any[],parameter:string):any {
    if(!items) return [];
    if(!parameter) return items;
    for(var i = 0; i<items.length; i++){
      if(items[i] === parameter){
        return items[i];
      }
    }
  }
}
