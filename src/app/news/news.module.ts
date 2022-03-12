import { NewsRoutingModule } from './news-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NewsModuleComponent } from './news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfNewsComponent } from './list-of-news/list-of-news.component';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
      ListOfNewsComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    RouterModule,
    BrowserModule,
    DialogModule,

    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    RippleModule,
  ]
  ,
  exports: [
    ListOfNewsComponent,]
})
export class NewsModule { }
