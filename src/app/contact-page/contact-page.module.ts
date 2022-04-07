import { ContactPageComponent } from './contact-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class ContactPageModule { }
