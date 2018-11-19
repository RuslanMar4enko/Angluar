import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auth} from '../../modules/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://127.0.0.1:8000/api/';

    constructor(private http: HttpClient) {

    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public isAuthenticated(): boolean {
        const token = this.getToken();
        return token ? true : false;
    }

    public refreshToken(): Promise<Auth> {
       return this.http.post<Auth>(this.apiUrl + 'refresh', '').toPromise();
    }
}

