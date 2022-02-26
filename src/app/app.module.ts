import { MainPageModuleModule } from './main-page-module/main-page-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponentComponent } from './headers-component/headers-component.component';
import { FootersComponentComponent } from './footers-component/footers-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponentComponent,
    FootersComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
