import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../_service/app.service';
import {UserLogin} from '../_domain/student';

import { UserloginService } from '../_service/userlogin.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userLogin = new UserLogin("", "");

  loginFailedAlert: boolean;
  loginFailedAlertMsg: String;

  constructor(private appService: AppService, 
    private userloginService: UserloginService,
    private router:Router) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.userloginService.setUserLoggedOut();
  }

  loginUser(e) {
    e.preventDefault();
    var userid = e.target.elements[0].value;
    var pass = e.target.elements[1].value;

    //this.appService.getCredentials(userid).subscribe(res => this.userLogin = res);
    this.userloginService.fetchUserLogin(userid).subscribe(data => {
      if(data.length > 0) {
        this.userLogin = data[0];
      }
      console.log(this.userLogin);
      if(userid == this.userLogin.user_id && pass == this.userLogin.password) {
        localStorage.setItem("loggedInUser", userid);
        this.userloginService.setUserLoggedIn();
        this.userloginService.setLoggedInUserId(userid);
        this.router.navigate(['/enrolled/:studentId']);
      }
      else if(userid == '99999' && pass == 'admin') {
        this.router.navigate(['/register/:studentId']);
      }
      else {
        this.loginFailedAlert = true;
        this.loginFailedAlertMsg = "Incorrect UserId or Password, Please try Again!";
        this.router.navigate(['/login']);
      }
    }, 
    error => {
      console.log(error);
      this.loginFailedAlert = true;
      this.loginFailedAlertMsg = "Cannot login, Application Error!";
    })
  }
}
