import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Registration } from './registration';
import { UserLogin } from './student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  registerStudent(registration: Registration){
    console.log(registration);
    let _url: string = "http://localhost:3999/finalregistration";
    return this.http.post<Registration>(_url, Registration, httpOptions);
  }

  getCredentials(userId: string){
    //let _url: string = "http://localhost:8080/user/" + userId;
    let _proxy_url: string = "api/user/" + userId;
    return this.http.get<UserLogin>(_proxy_url, httpOptions);
  }

}
