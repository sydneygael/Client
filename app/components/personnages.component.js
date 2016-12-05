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
var core_1 = require('@angular/core');
var personnage_service_1 = require('../services/personnage.service');
var PersonnagesComponent = (function () {
    function PersonnagesComponent(personnageService) {
        this.personnageService = personnageService;
    }
    PersonnagesComponent.prototype.getPersonnages = function () {
        var _this = this;
        this.personnageService.getPersonnages()
            .subscribe(function (personnages) { return _this.personnages = personnages; });
    };
    PersonnagesComponent.prototype.ngOnInit = function () {
        this.getPersonnages();
    };
    PersonnagesComponent = __decorate([
        core_1.Component({
            selector: 'personnages',
            templateUrl: 'app/templates/personnages.component.html'
        }), 
        __metadata('design:paramtypes', [personnage_service_1.PersonnageService])
    ], PersonnagesComponent);
    return PersonnagesComponent;
}());
exports.PersonnagesComponent = PersonnagesComponent;
//# sourceMappingURL=personnages.component.js.map