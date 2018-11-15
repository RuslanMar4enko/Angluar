import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../modules/User';
import {Auth} from '../modules/Auth';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {
    }

    private apiUrl = 'http://127.0.0.1:8000/api/';

    /** POST: add a new user to the server */
    addUser(user: User): Promise<User> {
           return this.http.post<User>(this.apiUrl + 'register', user, httpOptions).toPromise();
    }

    login(user): Promise<Auth> {
        return this.http.post<Auth>(this.apiUrl + 'login', user, httpOptions).toPromise();
    }
}
