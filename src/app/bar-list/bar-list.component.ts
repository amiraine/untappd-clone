import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';
import { Brewery } from '../models/brewery.model';
import { BreweryService } from '../brewery.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css'],
  providers: [BreweryService]
})
export class BarListComponent implements OnInit {
  breweryList;
  constructor(private breweryService: BreweryService, private routes: Router ) { }

  ngOnInit() {
    this.breweryService.getBrewery().subscribe(dataLastEmittedFromObserver => {
     this.breweryList = dataLastEmittedFromObserver;
   })
  }

  goToBrewery(brewery) {
     this.routes.navigate(['brewery', brewery.$key]);
   };

}
