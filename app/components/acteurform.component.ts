import {Component, Input} from "@angular/core";

@Component({
    selector: 'acteurform',
    templateUrl: 'app/templates/acteurform.component.html'
})

export class ActeurFormComponent {

    @Input() public noAct: number;
    @Input() public nomAct: string;
    @Input() public prenAct: string;
    @Input() public dateNaiss: Date;
    @Input() public dateDeces: Date;
}
