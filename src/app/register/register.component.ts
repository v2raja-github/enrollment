import { Component, OnInit } from '@angular/core';
import {Registration} from '../_domain/registration';
import { REGISTRATION } from '../_mock/mock-register';
import {Student} from '../_domain/Student';
import {Course} from '../_domain/course';
import {AppService} from '../_service/app.service';
import { UserloginService } from '../_service/userlogin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration = REGISTRATION;

  selectedCourse: Course;
  currentIndex: number;
  courses: Course[];

  constructor(private appService: AppService,
    private userloginService: UserloginService
  ) { }

  ngOnInit() {
    this.getRegisteredCourses(this.userloginService.getLoggedInUserId());
  }

  onSubmit() {
    this.appService.registerStudent(this.registration).subscribe(res => this.registration = res);
  }

  getRegisteredCourses(studentId: string) {
    this.appService.getStudentRegistration(studentId).subscribe(res => this.courses = res);
  }


  getPrevious() {
    if(this.currentIndex > 0) {
      this.currentIndex = this.currentIndex -1;
      this.selectedCourse = this.courses[this.currentIndex];
      
    }
  }

  getNext(){
    if(this.currentIndex < this.courses.length - 1) {
      this.currentIndex = this.currentIndex  + 1;
      this.selectedCourse = this.courses[this.currentIndex];
    }
  }

}
