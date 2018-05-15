import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyPageComponent } from './my-page/my-page.component';
import { DiscoverComponent } from './discover/discover.component';
import { BreweryPageComponent } from './brewery-page/brewery-page.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mypage',
    component: MyPageComponent
  },
  {
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'brewery/:id',
    component: BreweryPageComponent
  },
  {
    path: 'beerDetail/:id',
    component: BeerDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
