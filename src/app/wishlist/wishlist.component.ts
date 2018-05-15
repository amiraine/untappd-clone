import { Component, OnInit } from '@angular/core';
import { BEERS } from '../mock-beers';
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
  beerList;
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getBeers().subscribe(dataLastEmittedFromObserver => {
     this.beerList = dataLastEmittedFromObserver;
   })
  }

}
