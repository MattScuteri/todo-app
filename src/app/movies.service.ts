import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private url = "http://www.omdbapi.com/?t="; 
  private urlEnd = "&apikey=trilogy";


  getMovies(title) {
    let header = new HttpHeaders;
    header.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}${title}${this.urlEnd}`, {
        headers: header
      }).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}
