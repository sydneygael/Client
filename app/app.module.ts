import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule} from '@angular/http';
import {RouterModule, Routes}   from '@angular/router';
import {FormsModule}   from '@angular/forms';

import { AppComponent } from "./app.component";
import { IndexComponent } from "./components/index.component";
import { ActeursComponent } from './components/acteurs.component';
import { CategoriesComponent } from './components/categories.component';
import { FilmsComponent } from './components/films.component';
import { PersonnagesComponent } from './components/personnages.component';
import { RealisateursComponent } from './components/realisateurs.component';
import { ActeurFormComponent } from './components/acteurform.component';

import { MainService } from './services/main.service';
import { ActeurService } from './services/acteur.service';
import { CategorieService } from './services/categorie.service';
import { FilmService } from './services/film.service';
import { PersonnageService } from './services/personnage.service';
import { RealisateurService } from './services/realisateur.service';
import { EmitterService } from './services/emitter.service';
import {ActeurAddComponent} from "./components/acteuradd.component";
import {ActeurViewComponent} from "./components/acteur.component";

const appRoutes: Routes = [
            { path: 'index',component: IndexComponent },
            { path: '',component: IndexComponent },
			{ path: 'acteurs',component: ActeursComponent },
            { path: 'acteurs/add', component: ActeurAddComponent },
            //{ path: 'acteurs/see/:id', component: ActeurViewComponent },
            { path: 'films',component: FilmsComponent },
            { path: 'personnages',component: PersonnagesComponent },
            { path: 'categories',component: ActeursComponent },
			{ path: 'realisateurs', component: RealisateursComponent }
        ];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
	BrowserModule,
    FormsModule,
    JsonpModule,
	RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    ActeursComponent,
    CategoriesComponent,
    FilmsComponent,
    PersonnagesComponent,
    RealisateursComponent,
    ActeurFormComponent,
      ActeurAddComponent
  ],
  providers: [
    MainService,
    ActeurService,
    CategorieService,
    FilmService,
    PersonnageService,
    RealisateurService,
    EmitterService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
