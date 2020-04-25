import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import set = Reflect.set;

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080';

  getTableAndStructure() {
    return this.http.get(this.url + '/home');
  }

  sendRequestToDatabase(request: string) {
      const body = new HttpParams().set('request', request);
      return this.http.post( this.url + '/request', body, this.getArgHeaders());
  }

  getTodayAction() {
    return this.http.get(this.url + '/actionToday');
  }

  getAllAction() {
    return this.http.get(this.url + '/actionAll');
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
