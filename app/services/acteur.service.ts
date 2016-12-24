import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Acteur } from '../model/acteur';
import { MainService } from './main.service';

@Injectable()
export class ActeurService extends MainService {

    constructor(http: Http) {
		super(http);
        this.baseUrl = this.baseUrl + "acteur/getall";
    }

    getActeurs(): Observable<Acteur[]> {
        return this.http.get(this.baseUrl).map(response => <Acteur[]> response.json());
    }

    getActeur(id: number): Observable<Acteur> {
        var url = this.baseUrl + "/get/" + id;
        return this.http.get(url).map(response => <Acteur> response.json());
    }

    updateActeur(acteur: Acteur): Observable<Acteur> {
        var url = this.baseUrl + "acteur/update/";
        var body = JSON.stringify(acteur);
        return this.http.post(url, body, this.options).map(response => <Acteur> response.json());
    }

    addActeur(acteur: Acteur): Observable<Acteur> {
        var url = this.baseUrl + "acteur/add/";
        var body = JSON.stringify(acteur);
        return this.http.post(url, body, this.options).map(response => <Acteur> response.json());
    }

    deleteActeur(id: number): Observable<Acteur> {
        var url = this.baseUrl + "acteur/delete/" + id;
        return this.http.get(url).map(response => <Acteur> response.json());
    }
}