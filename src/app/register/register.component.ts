import { Component, OnInit } from '@angular/core';

import {Registration} from '../registration';

import { REGISTRATION } from '../mock-register';

import {Student} from '../Student';

import {Course} from '../course';

import {AppService} from '../app.service';

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



  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.appService.registerStudent(this.registration).subscribe(res => this.registration = res);


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
