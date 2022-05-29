import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryModuleComponenet } from './gallery.component';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    GalleryModuleComponenet
  ],
  imports: [
    CommonModule,
    DialogModule,
     ButtonModule,
     HttpClientModule,
     AngularEditorModule,
     BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
     ReactiveFormsModule,
     ToastModule,
     RippleModule,



  ]
})
export class GalleryModule { }
