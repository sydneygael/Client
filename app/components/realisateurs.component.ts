import { Component, OnInit } from '@angular/core';

import { Realisateur } from '../model/realisateur';
import { RealisateurService } from '../services/realisateur.service';

@Component({
    selector: 'realisateurs',
    templateUrl: 'app/templates/realisateurs.component.html'
})
export class RealisateursComponent implements OnInit {
    realisateurs: Realisateur[];

    constructor(private realisateurService: RealisateurService) { }

    getRealisateurs() {
        this.realisateurService.getRealisateurs()
        .subscribe(realisateurs => this.realisateurs = realisateurs);
    }

    ngOnInit() {
        this.getRealisateurs();
     }
}