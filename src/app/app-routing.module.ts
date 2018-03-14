import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { NoteComponent } from './note/note.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'university/:id', component: UniversityComponent },
  { path: 'university/:id/course/:id', component: CourseComponent },
  { path: 'note/:id', component: NoteComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
