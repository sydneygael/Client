import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Personnage } from '../model/personnage';
import { MainService } from './main.service';

@Injectable()
export class PersonnageService extends MainService<Personnage> {

    constructor(http: Http) {
        super(http);
        this.baseUrl= this.baseUrl+ "personnages";
    }

    getPersonnages(): Observable<Personnage[]> {
        return this.http.get(this.baseUrl).map(response => <Personnage[]> response.json().personnage);
    }
}