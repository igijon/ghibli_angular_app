import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GhibliRoutingModule } from './ghibli-routing.module';
import { FilmListComponent } from './components/films/film-list/film-list.component';


@NgModule({
  declarations: [
    FilmListComponent
  ],
  imports: [
    SharedModule,
    GhibliRoutingModule,
  ]
})
export class GhibliModule { }
