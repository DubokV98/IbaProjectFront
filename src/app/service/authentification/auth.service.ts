import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../model/User';


@Injectable()

export class AuthService {

  // BASE_PATH: 'http://localhost:8080'
  USER_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  USER_SESSION_PASSWORD = 'password';
  USER_SESSION_ROLE = 'role';
  COOKIE = 'cookie';

  user: User;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: string) {
    return this.http.get<User>('http://localhost:8080/user',
      {headers: {authorization: this.createBasicAuthToken(username, password)}}).pipe(map((res: User) => {
        this.user = res;
      this.user.username = username;
      this.user.password = password;
      this.registerSuccessfulLogin(this.user.username, this.user.password, this.user.authorities);
    }));
/*    return this.http.get('http://localhost:8080/token',
      { headers: {authorization: this.createBasicAuthToken(username, password)}}).subscribe(data => {
      const token = data['token'];
      sessionStorage.setItem(this.COOKIE, token);
      console.log('TOKEN-', token);
      this.registerSuccessfulLogin(username, password);
    });*/
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  getCookie() {
    return sessionStorage.getItem(this.COOKIE);
  }

  registerSuccessfulLogin(username, password, role) {
    sessionStorage.setItem(this.USER_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(this.USER_SESSION_PASSWORD, password);
    sessionStorage.setItem(this.USER_SESSION_ROLE, role);
  }

  getUsername() {
    return sessionStorage.getItem(this.USER_SESSION_ATTRIBUTE_NAME);
  }

  getPassword() {
    return sessionStorage.getItem(this.USER_SESSION_PASSWORD);
  }

  getRole() {
    return sessionStorage.getItem(this.USER_SESSION_ROLE);
  }

  logout() {
    sessionStorage.removeItem(this.USER_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.USER_SESSION_PASSWORD);
    sessionStorage.removeItem(this.USER_SESSION_ROLE);
    this.user = null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USER_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return false; }
    return true;
  }

  getLoggedInUserName() {
    const user = sessionStorage.getItem(this.USER_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return ''; }
    return user;
  }
}
