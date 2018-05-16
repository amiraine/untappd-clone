import { Component, OnInit } from '@angular/core';
import { Brewery } from '../models/brewery.model';
import { BreweryService } from '../brewery.service';
import { Beer } from '../models/beer.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BreweryService]
})
export class AdminComponent implements OnInit {
  breweryList;
  selectedBrewery;

  constructor(private breweryService: BreweryService, private router: Router) { }

  ngOnInit() {
  }

  newBrewery(name, address, city, state, zip) {
    let beerList: string[] = ["no beers yet"];
    let newBrewery: Brewery = new Brewery(name, beerList, city, state, address, zip);
    this.breweryService.saveBrewery(newBrewery);
    this.breweryService.getBrewery().subscribe((dataLastEmitted) => {
      this.breweryList=dataLastEmitted;
      this.breweryList.forEach((brewery) => {
        if(name === brewery.name){
          this.selectedBrewery= brewery;
          this.router.navigate(['brewery', this.selectedBrewery.$key]);
        }
      })

    })



  }

}
