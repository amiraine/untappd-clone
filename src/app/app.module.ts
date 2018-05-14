import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UserModuleComponent } from './user-module/user-module.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { BreweryPageComponent } from './brewery-page/brewery-page.component';
import { MyPageComponent } from './my-page/my-page.component';
import {routing} from './app.routing';
import { DiscoverComponent } from './discover/discover.component';
import { BarListComponent } from './bar-list/bar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    UserModuleComponent,
    WishlistComponent,
    HomeComponent,
    BreweryPageComponent,
    MyPageComponent,
    DiscoverComponent,
    BarListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
