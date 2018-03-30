import { Component, OnInit } from '@angular/core';
import {Registration} from '../_domain/registration';
import { REGISTRATION } from '../_mock/mock-register';
import {Student} from '../_domain/Student';
import {Course} from '../_domain/course';
import {Register} from '../_domain/register';
import {AppService} from '../_service/app.service';
import { UserloginService } from '../_service/userlogin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration = REGISTRATION;

  register = new Register(0, 0);

  msg: any;

  selectedCourse: Course;
  currentIndex: number;
  selectedRowIndex: number;
  allCourses: Course[];
  registeredCourses: Course[];

  students: Student[];
  loggedInStudent: Student;

  constructor(private appService: AppService,
    private userloginService: UserloginService
  ) { }

  ngOnInit() {
    //this.getEnrolledCourses(this.userloginService.getLoggedInUserId());
    this.getCourses();
    this.getStudent(this.userloginService.getLoggedInUserId());
  }

  onSubmit() {
    this.register.student_id = this.loggedInStudent.student_id;
    this.register.class_id = this.getSelectedCourse().class_id;
    this.appService.registerStudent(this.register).subscribe(res => {
      this.msg = res;
      console.log(this.msg);
    });
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

  getCourses() {
    this.appService.getAllCourses().subscribe(res => this.allCourses = res);
  }

  setSelectedCourse(selectedCourse: Course) {
    this.selectedCourse = selectedCourse;
  }

  getSelectedCourse() {
    return this.selectedCourse;
  }

  setSelectedRowIndex(rowIndex: number) {
    this.selectedRowIndex = rowIndex;
  }

  getSelectedRowIndex() {
    return this.selectedRowIndex;
  }

  getPrevious() {
    if(this.currentIndex > 0) {
      this.currentIndex = this.currentIndex -1;
      this.selectedCourse = this.allCourses[this.currentIndex];
      
    }
  }

  getNext(){
    if(this.currentIndex < this.allCourses.length - 1) {
      this.currentIndex = this.currentIndex  + 1;
      this.selectedCourse = this.allCourses[this.currentIndex];
    }
  }
}
