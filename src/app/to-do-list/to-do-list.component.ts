import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  moviesToWatch = [];
  moviesAlreadyWatched = [];
  newMovie = '';

  addMovie(newMovie) {
    this.moviesToWatch.push(newMovie);
    this.newMovie = '';
  }

  watchedMovie(movie, i) {
    console.log(movie, i);
    this.moviesToWatch.splice(i, 1);
    this.moviesAlreadyWatched.push(movie);
  }

  ngOnInit() {}

}
