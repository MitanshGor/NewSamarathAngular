import { ContactPageComponent } from './contact-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  exports: [
  ],
  imports: [

    HttpClientModule,
    AngularEditorModule,
    BrowserModule,
     FormsModule,
    ToastModule,
    RippleModule,
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class ContactPageModule { }
