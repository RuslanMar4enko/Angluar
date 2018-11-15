import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../modules/User';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient) {
    }

    private apiUrl = 'http://127.0.0.1:8000/api/';

    /** POST: add a new user to the server */
    addUser(user: User) {
           return this.http.post(this.apiUrl + 'register', user, httpOptions).toPromise();
    }

    login(user: User) {
        return this.http.post(this.apiUrl + 'login', user, httpOptions).toPromise();
    }
}
