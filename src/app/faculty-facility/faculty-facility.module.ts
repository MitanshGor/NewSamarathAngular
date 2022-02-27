import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FandFPageRoutingModule } from './faculty-facility-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityComponent } from './facility/facility.component';
import { FacultyComponent } from './faculty/faculty.component';



@NgModule({
  declarations: [
    FacilityComponent,
    FacultyComponent
  ],
  imports: [
    CommonModule,
    FandFPageRoutingModule,
    RouterModule,
    BrowserModule,
    // RouterOutlet
  ]
})
export class FacultyFacilityModule { }
