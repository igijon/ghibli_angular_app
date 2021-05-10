import { NgModule } from '@angular/core';

import { GhibliRoutingModule } from './ghibli-routing.module';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FilmListComponent
  ],
  imports: [
    SharedModule,
    GhibliRoutingModule
  ]
})
export class GhibliModule { }
