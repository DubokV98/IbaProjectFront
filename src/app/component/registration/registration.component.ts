import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../../service/registration/registration.service';
import {Answer} from '../../model/Answer';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  username: string;
  password_first: string;
  password_second: string;
  message: string;
  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
  }

  handleRegistration() {
    this.registrationService.registration(this.username, this.password_first, this.password_second).subscribe( (res: Answer) => {
      this.message = res.content;
    });
  }
}
