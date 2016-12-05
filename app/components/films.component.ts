import { Component, OnInit } from '@angular/core';

import { Film } from '../model/film';
import { FilmService } from '../services/film.service';

@Component({
    selector: 'films',
    templateUrl: 'app/templates/films.component.html'
})
export class FilmsComponent implements OnInit {
    films: Film[];

    constructor(private filmService: FilmService) { }

    getFilms() {
        this.filmService.getFilms()
            .subscribe(
                films => this.films = films
                );
    }

    ngOnInit() {
        this.getFilms();
    }
}