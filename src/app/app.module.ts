import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularFire2';
import { AngularFireDatabaseModule } from 'angularFire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
>>>>>>> 2c26632ae10aa0d7ab82223bd60b8394788a91fc

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UserModuleComponent } from './user-module/user-module.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { BreweryPageComponent } from './brewery-page/brewery-page.component';
import { MyPageComponent } from './my-page/my-page.component';
import { DiscoverComponent } from './discover/discover.component';
import { BarListComponent } from './bar-list/bar-list.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
import { routing } from './app.routing';

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
    BarListComponent,
    // SearchPipe
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    routing,
    FormsModule
=======
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
>>>>>>> 2c26632ae10aa0d7ab82223bd60b8394788a91fc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
