import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  moviesToWatch = [];
  moviesAlreadyWatched = [];
  movieInput = '';

  addMovie(movie) {
    console.log(movie);
    this.moviesToWatch.push(movie);
    this.movieInput = '';
  }

  watchedMovie(movie, i) {
    console.log(movie, i);
    this.moviesToWatch.splice(i, 1);
    this.moviesAlreadyWatched.push(movie);
  }

  ngOnInit() {}

}
