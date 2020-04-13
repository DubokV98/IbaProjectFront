import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../../model/message';

@Injectable()
export class HelloWorldService {

  constructor(private http: HttpClient) { }

  helloWorldService() {
    console.log('Запрос на гритинг');
    return this.http.get<Message>('http://localhost:8080/greeting');
  }
}

