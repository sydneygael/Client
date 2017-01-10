"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require("@angular/http");
var main_service_1 = require("./main.service");
var ActeurService = (function (_super) {
    __extends(ActeurService, _super);
    function ActeurService(http) {
        return _super.call(this, http) || this;
    }
    ActeurService.prototype.getActeurs = function () {
        var url = this.baseUrl + "acteur/getall";
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    ActeurService.prototype.getActeur = function (id) {
        var url = this.baseUrl + "acteur/getbyid?noAct=" + id;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    ActeurService.prototype.updateActeur = function (acteur) {
        if (acteur.dateDeces == "") {
            var url = this.baseUrl + "acteur/update?noAct=" + acteur.noAct
                + "nomAct=" + acteur.nomAct
                + "&prenAct=" + acteur.prenAct
                + "&dateNaiss=" + acteur.dateNaiss;
            return this.http.post(url).map(function (response) { return response.json(); });
        }
        else {
            var url = this.baseUrl + "acteur/update?noAct=" + acteur.noAct
                + "&nomAct=" + acteur.nomAct
                + "&prenAct=" + acteur.prenAct
                + "&dateNaiss=" + acteur.dateNaiss
                + "&dateDeces=" + acteur.dateDeces;
            return this.http.post(url).map(function (response) { return response.json(); });
        }
    };
    ActeurService.prototype.addActeur = function (acteur) {
        //localhost:8080/acteur/save?nomAct=syl&prenAct=Beg&dateNaiss=2000-01-01&dateDeces=2000-01-02
        if (acteur.dateDeces == null) {
            var url = this.baseUrl + "acteur/save?nomAct=" + acteur.nomAct +
                "&prenAct=" + acteur.prenAct
                + "&dateNaiss=" + acteur.dateNaiss;
            return this.http.post(url).map(function (response) { return response.json(); });
        }
        else {
            var url = this.baseUrl + "acteur/save?nomAct=" + acteur.nomAct +
                "&prenAct=" + acteur.prenAct
                + "&dateNaiss=" + acteur.dateNaiss
                + "&dateDeces=" + acteur.dateDeces;
            return this.http.post(url).map(function (response) { return response.json(); });
        }
    };
    ActeurService.prototype.deleteActeur = function (id) {
        var url = this.baseUrl + "acteur/delete?noAct=" + id;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    return ActeurService;
}(main_service_1.MainService));
ActeurService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ActeurService);
exports.ActeurService = ActeurService;
//# sourceMappingURL=acteur.service.js.map