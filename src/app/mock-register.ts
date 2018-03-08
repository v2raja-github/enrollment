import { Student } from './student';
import { Course } from './course';

import { Registration } from './registration';

const STUDENT: Student = 
    { student_id: 10001, firstname: 'Doug', lastname: 'Nice', username: 'Doug1', gender: 'male', age: 35, institution: 'Columbus University', degree: 'Robotics' };


const COURSES: Course[] = [
    { class_id: 101, classname: 'Intro to Robotics', department: 'Robotics'},
    { class_id: 102, classname: 'Indian History', department: 'History'},
    { class_id: 104, classname: 'Calculus III', department: 'Mathematics'},
];

export const REGISTRATION = new Registration(STUDENT, COURSES);
