import { Component, OnInit } from '@angular/core';
import { Registration } from './_domain/registration';
import { UserloginService } from './_service/userlogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enrollment app';

  constructor(private userLoginService: UserloginService) { }

  isUserLoggerIn() {
    return this.userLoginService.getUserLoggedIn();
  }

  isAdminUserLoggerIn() {
    return this.userLoginService.getAdminUserLoggedIn();
  }

}
