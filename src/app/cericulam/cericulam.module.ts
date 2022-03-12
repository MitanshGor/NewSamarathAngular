import { DialogModule } from 'primeng/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CericulamComponent } from './cericulam.component';



@NgModule({
  declarations: [

    CericulamComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    DialogModule,

    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    RippleModule,
  ],
  exports: [
    // CericulamComponent
  ]
})
export class CericulamModule { }
