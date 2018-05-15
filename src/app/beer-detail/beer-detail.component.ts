import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Beer } from '../models/beer.model';
import { BeerService } from '../beer.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-beer-detail-page',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
  providers: [BeerService]
})
export class BeerDetailComponent implements OnInit {
  selectedBeer;
  beerId;
  add: boolean = false;

  constructor(private beerService: BeerService, private location: Location, private router: ActivatedRoute, private routes: Router ) { }

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
      this.beerId = urlParameters['id'];
    });
    this.beerService.getBeerById(this.beerId).subscribe(dataLastEmittedFromObserver => {
     this.selectedBeer = dataLastEmittedFromObserver;
   })
  }

  makePost() {
    this.add = true;
  }


}
