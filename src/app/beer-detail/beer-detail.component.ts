import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Beer } from '../models/beer.model';
import { BeerService } from '../beer.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-beer-detail-page',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
  providers: [BeerService, UserService]
})
export class BeerDetailComponent implements OnInit {
  selectedBeer;
  beerId;
  add: boolean = false;
  currentUser;

  constructor(private beerService: BeerService, private location: Location, private router: ActivatedRoute, private routes: Router, private userService: UserService) { }

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
      this.beerId = urlParameters['id'];
    });
    this.beerService.getBeerById(this.beerId).subscribe(dataLastEmittedFromObserver => {
     this.selectedBeer = dataLastEmittedFromObserver;
   })
   this.userService.getUserById('0').subscribe(dataLastEmittedFromObserver => {
    this.currentUser = dataLastEmittedFromObserver;
  })
  }

  makePost() {
    this.add = true;
  }

  addToWish() {

  }


}
