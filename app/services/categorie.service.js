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
var CategorieService = (function (_super) {
    __extends(CategorieService, _super);
    function CategorieService(http) {
        return _super.call(this, http) || this;
    }
    CategorieService.prototype.getCategories = function () {
        var url = this.baseUrl + "categorie/getall";
        return this.http.get(url).map(function (response) { return response.json().categorie; });
    };
    CategorieService.prototype.getCategorie = function (id) {
        var url = this.baseUrl + "categorie/getbyid?noCat=" + id;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    CategorieService.prototype.updateActeur = function (categorie) {
        var url = this.baseUrl + "categorie/update/";
        var body = JSON.stringify(categorie);
        return this.http.post(url, body, this.options).map(function (response) { return response.json(); });
    };
    CategorieService.prototype.addACatgorie = function (categorie) {
        var url = this.baseUrl + "categorie/save/";
        var body = JSON.stringify(categorie);
        return this.http.post(url, body, this.options).map(function (response) { return response.json(); });
    };
    CategorieService.prototype.deleteCategorie = function (id) {
        var url = this.baseUrl + "categorie/delete?noCat=" + id;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    return CategorieService;
}(main_service_1.MainService));
CategorieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategorieService);
exports.CategorieService = CategorieService;
//# sourceMappingURL=categorie.service.js.map