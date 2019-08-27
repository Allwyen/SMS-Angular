import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
const approutes:Routes=[
  {path:'addstud',component:AddstudentComponent},
  {path:'dispstud',component:DisplaystudentComponent}
]

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddstudentComponent,
    DisplaystudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
