import { Component, OnInit } from '@angular/core';

import { Personnage } from '../model/personnage';
import { PersonnageService } from '../services/personnage.service';

@Component({
    selector: 'personnages',
    templateUrl: 'app/templates/personnages.component.html'
})
export class PersonnagesComponent implements OnInit {
    personnages: Personnage[];

    constructor(private personnageService: PersonnageService) { }

    getPersonnages() {
        this.personnageService.getPersonnages()
        .subscribe(personnages => this.personnages = personnages);
    }

    ngOnInit() {
        this.getPersonnages();
     }
}