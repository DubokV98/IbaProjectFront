import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HelloWorldService} from '../hello-world.service';

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
      console.log('Контент в хелло ворлд', res.content);
      this.welcomeMessage = res.content;
    });
  }
  redirectToLogout() {
    this.router.navigate(['/logout']);
  }
}
