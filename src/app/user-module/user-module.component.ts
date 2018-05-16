import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { BeerService } from '../beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.css'],
  providers: [UserService, BeerService]
})
export class UserModuleComponent implements OnInit {
  userList;
  currentUser;
  beerList;
  constructor(private userService: UserService, private beerService: BeerService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.userList = dataLastEmittedFromObserver;
      this.currentUser= this.userList[0];
      this.beerService.getBeers().subscribe(dataLastEmittedFromObserver => {
       this.beerList = dataLastEmittedFromObserver;
     })
    })

  }

  goToBeer(beer) {
    let selectedBeer;
    this.beerList.forEach((item) => {
      if(item.name === beer){
        selectedBeer=item;
      }
    })
     this.router.navigate(['beerDetail', selectedBeer.$key]);
   };

}
