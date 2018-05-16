
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Brewery } from '../models/brewery.model';
import { BreweryService } from '../brewery.service';
import { BeerService } from '../beer.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brewery-page',
  templateUrl: './brewery-page.component.html',
  styleUrls: ['./brewery-page.component.css'],
  providers: [BreweryService, BeerService]
})
export class BreweryPageComponent implements OnInit {
  selectedBrewery;
  breweryId;
  admin: boolean = false;
  beerList;

  constructor(private breweryService: BreweryService, private beerService: BeerService, private location: Location, private router: ActivatedRoute, private routes: Router ) { }

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
      this.breweryId = urlParameters['id'];
    });
    this.breweryService.getBreweryById(this.breweryId).subscribe(dataLastEmittedFromObserver => {
     this.selectedBrewery = dataLastEmittedFromObserver;
   })
   this.beerService.getBeers().subscribe(dataLastEmittedFromObserver => {
    this.beerList = dataLastEmittedFromObserver;
  })
  }

  goToBeer(beer) {
    let selectedBeer;
    this.beerList.forEach((item) => {
      if(item.name === beer){
        selectedBeer=item;
      }
    })
     this.routes.navigate(['beerDetail', selectedBeer.$key]);
   };

  showAdmin() {
    this.admin = true;
  }

  hideAdmin() {
    this.admin = false;
  }


}
