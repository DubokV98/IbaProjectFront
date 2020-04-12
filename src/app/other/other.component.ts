import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
})
export class OtherComponent implements OnInit {

  constructor(private http: HttpClient) {   }

  ngOnInit() {
  }
 ss() {
   this.http.get('http://localhost:8080/auth').subscribe(data => {
     console.log(data);
   });
 }
}
