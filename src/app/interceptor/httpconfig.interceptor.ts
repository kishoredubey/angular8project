import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpConfigInterceptor implements HttpInterceptor { 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var data = localStorage.getItem('currentUser');
        if(data){
            var token = JSON.parse(data)['accessToken'];
            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            },
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // server-side error
                    errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                }
                console.log(errorMessage);
                return throwError(errorMessage);
            })
            ));
    }
}