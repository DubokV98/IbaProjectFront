import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HelloWorldService} from '../../service/helloWorld/hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  providers: [HelloWorldService]
})
export class HelloWorldComponent implements OnInit {

  welcomeMessage = '';

  constructor(private route: ActivatedRoute,
              private router: Router, private helloWorldService: HelloWorldService) { }

  ngOnInit() {
    this.helloWorldService.helloWorldService().subscribe((res) => {
      this.welcomeMessage = res.content;
    });
  }
}
