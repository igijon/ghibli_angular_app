import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public imgGhibli: string;
  public title: string;

  constructor() { }

  ngOnInit(): void {
    this.title="Ghibli App";
    this.imgGhibli="./assets/studio_ghibli.png";
  }

}
