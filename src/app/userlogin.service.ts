import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { UserLogin } from './student';

@Injectable()
export class UserloginService {

  private isUserLoggedIn: boolean;
  private userId: string;

  constructor(private http: Http) {
    this.isUserLoggedIn = false;
  }

  public fetchUserLogin(userId: string) : Observable<UserLogin> {
    //let _url: string = "http://localhost:8080/user/" + userId;
    let _proxy_url: string = "api/user/" + userId;
    return this.http.get(_proxy_url).map(res => res.json());
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
