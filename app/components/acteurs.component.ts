import {Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Acteur } from '../model/acteur';
import { ActeurService } from '../services/acteur.service';
import { ActeurFormComponent } from '../components/acteurform.component';

@Component({
    selector: 'acteurs',
    templateUrl: 'app/templates/acteurs.component.html',
	 providers: [ActeurService]
})
export class ActeursComponent  implements OnInit {
    acteurs: Acteur[];
	errorMessage: string;
    acteurSelect:Acteur ;

    constructor(private acteurService: ActeurService) { }

    loadActeurs(){
        this.acteurService.getActeurs()
            .subscribe(
						data => this.acteurs = data,
						error => this.errorMessage = error.status + " est le statuts d'error"
			);
    }

    editActor(acteur:Acteur){ // to emit
        this.acteurSelect=acteur;
    }
	
	ngOnInit(): void{
            this.loadActeurs();
    }
}