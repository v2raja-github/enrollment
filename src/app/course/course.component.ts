import { Component, OnInit } from '@angular/core';

import {Course} from '../_domain/Course';

import { COURSES } from '../_mock/mock-courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses = COURSES;
  
  selectedCourse: Course;
  currentIndex: number;

  constructor() {

    this.currentIndex = 0;
    this.selectedCourse = this.courses[this.currentIndex];
   }

  ngOnInit() {
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
