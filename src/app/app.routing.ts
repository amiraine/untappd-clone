import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyPageComponent } from './my-page/my-page.component';
import { DiscoverComponent } from './discover/discover.component';
import { AdminComponent } from './admin/admin.component';


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
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
