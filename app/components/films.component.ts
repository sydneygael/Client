import { Component, OnInit } from '@angular/core';

import { Film } from '../model/film';
import { FilmService } from '../services/film.service';

@Component({
    selector: 'films',
    templateUrl: 'app/templates/films.component.html'
})
export class FilmsComponent implements OnInit {
    films: Film[];
    filmSelected : Film;

    constructor(private filmService: FilmService) { }

    loadFilms(): void {
        this.filmService.getFilms()
            .subscribe(data => this.films = data);
    }

    ngOnInit() {
        this.loadFilms();
    }

    selectFilm(film : Film) : void {
        this.filmSelected = film;
    }

    deleteFilm(): void {
        this.filmService.deleteFilm(this.filmSelected.noFilm)
            .subscribe( film => { this.loadFilms();});
    }

}