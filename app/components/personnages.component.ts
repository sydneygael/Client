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

    laodPersonnages() {
        this.personnageService.getPersonnages()
        .subscribe(data => this.personnages = data);
    }

    ngOnInit() {
        this.laodPersonnages();
     }
}