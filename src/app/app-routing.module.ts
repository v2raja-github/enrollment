import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }   from './register/register.component';
import { EnrolledComponent }   from './enrolled/enrolled.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserauthGuard } from './_guards/userauth.guard';
import { AdminGuard } from './_guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginFormComponent },
  { path: 'enrolled', canActivate: [UserauthGuard], component: EnrolledComponent },
  { path: 'register', canActivate: [UserauthGuard], component: RegisterComponent },
  { path: 'student/:userId', canActivate: [AdminGuard], component: StudentComponent },
  { path: 'course/:classId', canActivate: [AdminGuard], component: CourseComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
