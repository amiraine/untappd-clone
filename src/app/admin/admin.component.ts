import { Component, OnInit } from '@angular/core';
import { Brewery } from '../models/brewery.model';
import { BreweryService } from '../brewery.service';
import { Beer } from '../models/beer.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BreweryService]
})
export class AdminComponent implements OnInit {

  constructor(private breweryService: BreweryService) { }

  ngOnInit() {
  }

  newBrewery(name, address, city, state, zip) {
    let beerList: string[] = ["no beers yet"];
    let newBrewery: Brewery = new Brewery(name, beerList, city, state, address, zip);
    this.breweryService.saveBrewery(newBrewery);
  }

}
