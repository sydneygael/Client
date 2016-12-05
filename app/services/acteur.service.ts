import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Acteur } from '../model/acteur';
import { MainService } from './main.service';

@Injectable()
export class ActeurService extends MainService<Acteur> {

    constructor(http: Http) {
		super(http);
        this.baseUrl = this.baseUrl + "acteur/getall";
    }

    getActeurs(): Observable<Acteur[]> {
        return this.http.get(this.baseUrl).map(response => <Acteur[]> response.json());
    }
}