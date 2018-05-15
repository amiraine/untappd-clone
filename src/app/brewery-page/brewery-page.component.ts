
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Brewery } from '../models/brewery.model';
import { BreweryService } from '../brewery.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brewery-page',
  templateUrl: './brewery-page.component.html',
  styleUrls: ['./brewery-page.component.css'],
  providers: [BreweryService]
})
export class BreweryPageComponent implements OnInit {
  selectedBrewery;
  breweryId;
  admin: boolean = false;

  constructor(private breweryService: BreweryService, private location: Location, private router: ActivatedRoute, private routes: Router ) { }

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
      this.breweryId = urlParameters['id'];
    });
    this.breweryService.getBreweryById(this.breweryId).subscribe(dataLastEmittedFromObserver => {
     this.selectedBrewery = dataLastEmittedFromObserver;
   })
  }

  goToBeer(beer) {
     this.routes.navigate(['beerDetail', beer.$key]);
   };

  showAdmin() {
    this.admin = true;
  }

  hideAdmin() {
    this.admin = false;
  }


}
