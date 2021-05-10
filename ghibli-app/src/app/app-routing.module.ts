import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './core/components/description/description.component';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'ghibli',
    loadChildren:() => import('./ghibli/ghibli.module').then((m) => m.GhibliModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
