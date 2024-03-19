import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { CountriesMainComponent } from './countries-main/countries-main.component';
import { MapComponent } from './map/map.component';
import { WarComponent } from './war/war.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WarGeoComponent } from './war-geo/war-geo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent
  },

  {
    path: 'countries',
    component: CountriesMainComponent
  },

  {
    path: 'map',
    component: MapComponent
  },

  {
    path: 'war',
    component: WarComponent
  },

  {
    path: 'wargeo',
    component: WarGeoComponent
  },

  {
    path: 'about',
    component: AboutusComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
