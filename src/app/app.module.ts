import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppService } from './app.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserloginService } from './userlogin.service';
import { UserauthGuard } from './userauth.guard';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CourseComponent,
    StudentComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AppService, UserloginService, UserauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
