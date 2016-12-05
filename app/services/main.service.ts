import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response} from '@angular/http';

@Injectable()
export class MainService<T> {

    protected baseUrl = "http://localhost:8080/";
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(protected http: Http) { }
	
}