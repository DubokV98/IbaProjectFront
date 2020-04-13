import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../authentification/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('auth') === -1) {
      console.log('We here in interceptor!!!');
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + window.btoa(this.authenticationService.getUsername() + ':' + this.authenticationService.getPassword())
        })
      });
      console.log ('Login - ', this.authenticationService.getUsername(), 'password - ', this.authenticationService.getPassword());
      return next.handle(authReq);
    } else {
      console.log('return req');
      return next.handle(req);
    }
  }
}
