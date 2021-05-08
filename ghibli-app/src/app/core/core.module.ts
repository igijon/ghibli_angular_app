import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescriptionComponent } from './components/description/description.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DescriptionComponent
  ]
})
export class CoreModule { }
