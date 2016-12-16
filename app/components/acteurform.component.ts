import {Component, Input} from "@angular/core";
import { Acteur } from '../model/acteur';

@Component({
    selector: 'acteurform',
    templateUrl: 'app/templates/acteurform.component.html'
})

export class ActeurFormComponent {

    private _acteur :Acteur;

    @Input() set acteur(acteur :Acteur){
        this._acteur=acteur;
    }

    get acteur(): Acteur {return this._acteur;}

}
