import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../models/beer.model';
import { BreweryService } from '../brewery.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css'],
  providers: [BeerService, BreweryService]
})
export class AddBeerComponent implements OnInit {
  breweryId;
  brewery;

  constructor(private route: ActivatedRoute, private beerService: BeerService, private breweryService: BreweryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.breweryId = parseInt(urlParameters['id']);
      console.log(this.breweryId + " brewery id");
    });
    this.breweryService.getBreweryById(this.breweryId).subscribe(dataLastEmittedFromObserver => {
      this.brewery = dataLastEmittedFromObserver;
      console.log(this.brewery + "meh");
    });
  }

  newBeer(name, type, abv, ibu, rating, description, notes) {
    let breweryName = "";
    let newBeer: Beer = new Beer (name, this.brewery.name, type, abv, ibu, rating, description, notes);
    console.log(newBeer);
    this.beerService.saveBeer(newBeer);
    this.brewery.beers.push(newBeer);
    this.breweryService.updateBrewery(this.brewery);
  }
}
