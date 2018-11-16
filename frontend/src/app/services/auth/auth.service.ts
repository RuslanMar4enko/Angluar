import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public isAuthenticated(): boolean {
        const token = this.getToken();
        return token ? true : false;
    }
}

