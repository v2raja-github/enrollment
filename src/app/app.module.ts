import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppService } from './app.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CourseComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
