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

    public getApi(currentPage): Promise<GetApi[]> {
        return this.http.get<GetApi[]>(this.apiUrl + 'index?page=' + currentPage).toPromise();
    }

    public deleteApi (apis: GetApi | number): Observable<GetApi> {
        const id = typeof apis === 'number' ? apis : apis.id;
        const url = `${this.apiUrl}delete/${id}`;
        return this.http.delete<GetApi>(url);
    }

    public createApi(data: object): Promise<GetApi> {
        const url = `${this.apiUrl}store`;
        return this.http.post<GetApi>(url, data).toPromise();
    }
}
