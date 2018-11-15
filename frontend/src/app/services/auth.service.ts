import { Injectable } from '@angular/core';
// import { JwtHelper } from '@auth2/angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return token ? true : false;
    }
}

