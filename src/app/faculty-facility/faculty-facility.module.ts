import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FandFPageRoutingModule } from './faculty-facility-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityComponent } from './facility/facility.component';
import { FacultyComponent } from './faculty/faculty.component';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../service/data-service';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    FacilityComponent,
    FacultyComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    FandFPageRoutingModule,
    RouterModule,
    BrowserModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    RippleModule,

  ]
  ,
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MessageService, DataService],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FacultyFacilityModule { }
