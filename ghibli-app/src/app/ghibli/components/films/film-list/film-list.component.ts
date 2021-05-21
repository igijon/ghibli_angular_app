import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/ghibli/models/film';
import { FilmsResponse } from 'src/app/ghibli/models/req-resp';
import { RestGhibliFilmsService } from 'src/app/ghibli/services/rest-ghibli-films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})
export class FilmListComponent implements OnInit {

  public films: Film[] = [];
  constructor(private restFilmsService: RestGhibliFilmsService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  public getFilms() {
    this.restFilmsService.getFilms().subscribe((response) => {
      this.films = response;
    });
  }
}
