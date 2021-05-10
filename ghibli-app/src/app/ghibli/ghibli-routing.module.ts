import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/films/film-list/film-list.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GhibliRoutingModule { }
