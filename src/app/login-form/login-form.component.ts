import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../app.service';
import {UserLogin} from '../student';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userLogin = new UserLogin("", "");

  constructor(private appService: AppService, private router:Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    var userid = e.target.elements[0].value;
    var pass = e.target.elements[1].value;

    this.appService.getCredentials(userid).subscribe(res => this.userLogin = res);

    if(userid == this.userLogin.user_id && pass == this.userLogin.password) {
      this.router.navigate(['/register']);
    }
    else if(userid == 'admin' && pass == 'admin') {
      this.router.navigate(['/register']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
