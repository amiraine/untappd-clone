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
      this.breweryId = urlParameters['id'];
    });
    this.breweryService.getBreweryById(this.breweryId).subscribe(dataLastEmittedFromObserver => {
      this.brewery = dataLastEmittedFromObserver;
    });
  }

  newBeer(name, type, abv, ibu, rating, description, notes) {
    let newBeer: Beer = new Beer (name, this.brewery.name, type, abv, ibu, rating, description, notes);
    this.beerService.saveBeer(newBeer);
    this.brewery.beers.push(name);
    this.brewery.beers.forEach((beer) =>{
      if(beer === "no beers yet"){
        let index = this.brewery.beers.indexOf(beer);
        this.brewery.beers.splice(index, 1);
      }
    })
    this.breweryService.updateBrewery(this.brewery);
  }
}
