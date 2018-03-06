import { Student } from './student';
import { Course } from './course';

import { Registration } from './registration';

const STUDENT: Student = 
    { studentid: 11, firstname: 'Doug', lastname: 'Nice', username: 'Doug1', gender: 'male', age: 35, institution: 'Columbus University', degree: 'Robotics' };


const COURSES: Course[] = [
    { classid: 101, classname: 'Intro to Robotics', department: 'Robotics'},
    { classid: 102, classname: 'Indian History', department: 'History'},
    { classid: 104, classname: 'Calculus III', department: 'Mathematics'},
];

export const REGISTRATION = new Registration(STUDENT, COURSES);



