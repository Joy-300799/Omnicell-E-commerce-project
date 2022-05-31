import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newReq = req;
    let token = localStorage.getItem('token');
    console.log('interceptor', token);
    if (token != null) {
      newReq = newReq.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      console.log(newReq);
    }
    return next
      .handle(newReq)
      .pipe(catchError((error: any) => this.errorHandler(error)));
  }
  errorHandler(error: HttpEvent<any>): Observable<HttpEvent<any>> {
    console.log(error);
    throw error;
  }
}
