import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'ghibli',
    loadChildren:() => import('./ghibli/ghibli.module').then((m) => m.GhibliModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
