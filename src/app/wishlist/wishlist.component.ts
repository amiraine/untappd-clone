import { Component, OnInit } from '@angular/core';
import { BEERS } from '../mock-beers';
import { Beer } from '../models/beer.model';
import {SearchPipe} from '../search.pipe';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  beerList = BEERS;
  constructor() { }

  ngOnInit() {
  }

}
