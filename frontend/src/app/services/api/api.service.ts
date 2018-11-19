import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetApi} from '../../modules/GetApi';
import {Observable} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'http://127.0.0.1:8000/api/';

    constructor( public http: HttpClient) {

    }

    public getApi(): Promise<GetApi[]> {
        return this.http.get<GetApi[]>(this.apiUrl + 'index').toPromise();
    }

    deleteApi (apis: GetApi | number): Observable<GetApi> {
        const id = typeof apis === 'number' ? apis : apis.id;
        const url = `${this.apiUrl}delete/${id}`;
        return this.http.delete<GetApi>(url);
    }
}
