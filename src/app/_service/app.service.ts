import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Registration } from '../_domain/registration';
import { UserLogin } from '../_domain/student';
import { Course } from '../_domain/course';

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

  getStudentRegistration(studentId: string){
    //let _url: string = "http://localhost:8080/registration/" + studentId;
    let _proxy_url: string = "api/registration/" + studentId;
    return this.http.get<Course[]>(_proxy_url, httpOptions);
  }

}
