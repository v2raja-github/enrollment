import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Register } from '../_domain/register';
import { UserLogin } from '../_domain/student';
import { Course } from '../_domain/course';
import { Student } from '../_domain/student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  registerStudent(register: Register){
    console.log(register);
    let _url: string = "http://localhost:8080/register";
    let _proxy_url: string = "api/register/" + register.student_id;
    return this.http.post<any>(_url, register, httpOptions);
  }

  getStudentEnrolledCourses(studentId: string){
    //let _url: string = "http://localhost:8080/enrolled/" + studentId;
    let _proxy_url: string = "api/enrolled/" + studentId;
    return this.http.get<Course[]>(_proxy_url, httpOptions);
  }

  getAllCourses(){
    //let _url: string = "http://localhost:8080/courses/";
    let _proxy_url: string = "api/courses";
    return this.http.get<Course[]>(_proxy_url, httpOptions);
  }

  getStudent(studentId: string){
    //let _url: string = "http://localhost:8080/courses/";
    let _proxy_url: string = "api/student/" + studentId;
    return this.http.get<Student[]>(_proxy_url, httpOptions);
  }

  getAllStudents(){
    //let _url: string = "http://localhost:8080/courses/";
    let _proxy_url: string = "api/students";
    return this.http.get<Student[]>(_proxy_url, httpOptions);
  }

}
