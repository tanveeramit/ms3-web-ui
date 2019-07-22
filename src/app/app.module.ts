import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule} from '@angular/router';
import { UpdateEmpDetailsComponent } from './components/update-emp-details/update-emp-details.component';
import { AppService } from './services/app.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { CreateEmpDetailsComponent } from './components/create-emp-details/create-emp-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    NavBarComponent,
    UpdateEmpDetailsComponent,
    CreateEmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'home',component: EmpListComponent},
      {path:'edit/:id',component: UpdateEmpDetailsComponent},
      {path:'create',component: CreateEmpDetailsComponent},
      {path:'**',component: EmpListComponent}
   ]),
   ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() 
      ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
