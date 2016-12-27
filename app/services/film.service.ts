import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Film } from '../model/film';
import { MainService } from './main.service';

@Injectable()
export class FilmService extends MainService {

    constructor(http: Http) {
        super(http);
        this.baseUrl = this.baseUrl
    }
    
    getFilms(): Observable<Film[]> {
        var url = this.baseUrl + "film/getall";
        return this.http.get(url).map(response => <Film[]> response.json());
    }

    getFilm(id: number): Observable<Film> {
        var url = this.baseUrl + "film/getbyid?noFilm=" + id;
        return this.http.get(url).map(response => <Film> response.json());
    }

    updateFilm(film: Film): Observable<Film> {
        var url = this.baseUrl + "film/update/";
        var body = JSON.stringify(film);
        return this.http.post(url, body, this.options).map(response => <Film> response.json());
    }

    addFilm(film: Film): Observable<Film> {
        var url = this.baseUrl + "film/save/";
        var body = JSON.stringify(film);
        return this.http.post(url, body, this.options).map(response => <Film> response.json());
    }

    deleteFilm(id: number): Observable<Film> {
        var url = this.baseUrl + "film/delete?noFilm=" + id;
        return this.http.get(url).map(response => <Film> response.json());
    }
}
