import { Film } from './film';
import { Acteur } from './acteur';

export class Personnage {
    noFilm: number;
    noAct: number;
    film: Film;
    acteur: Acteur;
    nomPers: string;
}