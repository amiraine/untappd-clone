import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../models/beer.model';
import {SearchPipe} from '../search.pipe';
import { BeerService } from '../beer.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers: [BeerService]
})
export class WishlistComponent implements OnInit {
  @Input() currentUser;
  beerList;

  constructor(private beerService: BeerService, private router: Router) { }

  ngOnInit() {
    this.beerService.getBeers().subscribe(dataLastEmittedFromObserver => {
     this.beerList = dataLastEmittedFromObserver;
   })

  }

  goToBeer(beer) {
    let selectedBeer;
    this.beerList.forEach((item) => {
      if(item.name === beer.name){
        selectedBeer=item;
      }
    })
     this.router.navigate(['beerDetail', selectedBeer.$key]);
   };

}
