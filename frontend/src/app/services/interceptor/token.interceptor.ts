import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });

        return next.handle(request).do((event: HttpEvent<any>) => {
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.auth.refreshToken().then(data => {
                        localStorage.setItem('token', data.token);
                    });
                }
            }
        });
    }
}
