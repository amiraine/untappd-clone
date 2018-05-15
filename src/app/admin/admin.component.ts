import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BeerService]
})
export class AdminComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  newBeer(name, brewery, type, abv, ibu, rating, description, notes) {
    let newBeer: Beer = new Beer (name, brewery, type, abv, ibu, rating, description, notes);
    console.log(newBeer);
    this.beerService.saveBeer(newBeer);
  }
}
