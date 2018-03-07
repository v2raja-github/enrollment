import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    var userid = e.target.elements[0].value;
    var pass = e.target.elements[1].value;

    if(userid == 'admin' && pass == 'admin') {
      this.router.navigate(['/register']);
    }
  }
}
