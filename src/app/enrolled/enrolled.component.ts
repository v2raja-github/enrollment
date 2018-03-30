import { Component, OnInit } from '@angular/core';
import {Registration} from '../_domain/registration';
import { REGISTRATION } from '../_mock/mock-register';
import {Student} from '../_domain/student';
import {Course} from '../_domain/course';
import {Register} from '../_domain/register';
import {AppService} from '../_service/app.service';
import { UserloginService } from '../_service/userlogin.service';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css']
})
export class EnrolledComponent implements OnInit {

  msg: any;
  
    selectedCourse: Course;
    currentIndex: number;
    allCourses: Course[];
    registeredCourses: Course[];
  
    students: Student[];
    loggedInStudent: Student = new Student(0, "", "", "", "", 0, "", "");
  
    constructor(private appService: AppService,
      private userloginService: UserloginService
    ) { }
  
    ngOnInit() {
      this.getEnrolledCourses(this.userloginService.getLoggedInUserId());
      this.getStudent(this.userloginService.getLoggedInUserId());
    }
  
  
    getEnrolledCourses(studentId: string) {
      this.appService.getStudentEnrolledCourses(studentId).subscribe(res => this.registeredCourses = res);
    }
  
    getStudent(studentId: string) {
      this.appService.getStudent(studentId).subscribe(res => { this.students = res
        if (this.students != null && this.students.length > 0) {
            this.loggedInStudent = this.students[0];
        }
      });
    }

}
