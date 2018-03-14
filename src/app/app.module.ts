import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteComponent } from './note/note.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UniversityComponent } from './university/university.component';
import { FooterComponent } from './footer/footer.component';
import { ResponseBoxComponent } from './response-box/response-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    NavbarComponent,
    NoteComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    UniversityComponent,
    FooterComponent,
    ResponseBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
