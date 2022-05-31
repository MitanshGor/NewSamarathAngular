import { SafePipe } from './url.pipe';
import { NgModule, Sanitizer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

import {TreeSelectModule} from 'primeng/treeselect';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import { DownloadsModuleComponent } from './downloads.component';



@NgModule({
  declarations: [ SafePipe ],

  imports: [
    CommonModule,

    TreeSelectModule,


    PanelModule,
		FormsModule,
    HttpClientModule,


    RouterModule,
    BrowserModule,
    DialogModule,

    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    ReactiveFormsModule
  ]
})
export class DownloadsModule { }
