import { Component, OnInit, Input } from '@angular/core';
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
  @Input() currentUser;

  constructor(private beerService: BeerService) { }

  ngOnInit() {


  }

}
