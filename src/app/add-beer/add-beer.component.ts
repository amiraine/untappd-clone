import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css'],
  providers: [BeerService]
})
export class AddBeerComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  newBeer(name, brewery, type, abv, ibu, rating, description, notes) {
    let newBeer: Beer = new Beer (name, brewery, type, abv, ibu, rating, description, notes);
    this.beerService.saveBeer(newBeer);
  }
}
