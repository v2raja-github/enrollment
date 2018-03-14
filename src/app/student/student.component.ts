import { Component, OnInit } from '@angular/core';

import {Student} from '../_domain/Student'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student = {
    student_id: 1001,
    firstname: 'Raja',
    lastname: 'Andra',
    username: 'v2raja',
    gender: 'male',
    age: 50,
    institution: 'columbus University',
    degree: 'Robotics'
  }

  constructor() { }

  ngOnInit() {
  }

}
