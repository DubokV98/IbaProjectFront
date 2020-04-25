import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Answer} from '../../model/Answer';


@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080';

  registration(username: string, password_first: string, password_second: string) {
    const body = new HttpParams().set('username', username).set('password_first', password_first)
      .set('password_second', password_second);
    return this.http.post( this.url + '/registration', body, this.getArgHeaders());
  }
  private getArgHeaders(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      })
    };
    return httpOptions;
  }
}
