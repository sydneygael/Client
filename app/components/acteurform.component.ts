import {Component} from "@angular/core";
import { Acteur } from '../model/acteur';
import { Location } from '@angular/common';
import {ActeurService} from "../services/acteur.service";

@Component({
    selector: 'acteurform',
    templateUrl: 'app/templates/acteurform.component.html'
})

export class ActeurFormComponent {
    private acteur : Acteur;

    constructor(
        private acteurService: ActeurService,
        private location: Location
    ) {this.acteur = new Acteur(); }

    onSubmit(): void {
        this.acteur.noAct = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
        this.acteurService.addActeur(this.acteur)
            .subscribe(acteur => {
               // toastr.success("Acteur ajouté");
                this.location.back();
            });
    }

    goBack(): void {
        this.location.back();
    }
}
