import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }   from './register/register.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserauthGuard } from './userauth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginFormComponent },
  { path: 'register', canActivate: [UserauthGuard], component: RegisterComponent },
  { path: 'student/:userId', canActivate: [UserauthGuard], component: StudentComponent },
  { path: 'course', canActivate: [UserauthGuard], component: CourseComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
