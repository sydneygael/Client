"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var index_component_1 = require("./components/index.component");
var acteurs_component_1 = require("./components/acteurs.component");
var categories_component_1 = require("./components/categories.component");
var films_component_1 = require("./components/films.component");
var personnages_component_1 = require("./components/personnages.component");
var realisateurs_component_1 = require("./components/realisateurs.component");
var acteurform_component_1 = require("./components/acteurform.component");
var main_service_1 = require("./services/main.service");
var acteur_service_1 = require("./services/acteur.service");
var categorie_service_1 = require("./services/categorie.service");
var film_service_1 = require("./services/film.service");
var personnage_service_1 = require("./services/personnage.service");
var realisateur_service_1 = require("./services/realisateur.service");
var emitter_service_1 = require("./services/emitter.service");
var appRoutes = [
    { path: 'index', component: index_component_1.IndexComponent },
    { path: '', component: index_component_1.IndexComponent },
    { path: 'acteurs', component: acteurs_component_1.ActeursComponent },
    { path: 'films', component: films_component_1.FilmsComponent },
    { path: 'personnages', component: personnages_component_1.PersonnagesComponent },
    { path: 'categories', component: categories_component_1.CategoriesComponent },
    { path: 'realisateurs', component: realisateurs_component_1.RealisateursComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.JsonpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            index_component_1.IndexComponent,
            acteurs_component_1.ActeursComponent,
            categories_component_1.CategoriesComponent,
            films_component_1.FilmsComponent,
            personnages_component_1.PersonnagesComponent,
            realisateurs_component_1.RealisateursComponent,
            acteurform_component_1.ActeurFormComponent
        ],
        providers: [
            main_service_1.MainService,
            acteur_service_1.ActeurService,
            categorie_service_1.CategorieService,
            film_service_1.FilmService,
            personnage_service_1.PersonnageService,
            realisateur_service_1.RealisateurService,
            emitter_service_1.EmitterService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map