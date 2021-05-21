import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
