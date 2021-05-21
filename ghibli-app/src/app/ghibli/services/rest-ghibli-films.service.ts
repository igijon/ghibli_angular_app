import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import { map } from 'rxjs/operators';
import { FilmsResponse } from '../models/req-resp';

@Injectable({
  providedIn: 'root'
})
export class RestGhibliFilmsService {

  public urlFilms: string = "https://ghibliapi.herokuapp.com/films";

  constructor(private http: HttpClient) { }

  public getFilms()
  {
    return this.http.get<FilmsResponse[]>(this.urlFilms).pipe(
      map( (resp:FilmsResponse[]) => {
        return resp.map(film => Film.filmFromJSON(film))
      })
    );
  }
}
