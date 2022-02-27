import { MainPageModuleModule } from './main-page-module/main-page-module.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponentComponent } from './headers-component/headers-component.component';
import { FootersComponentComponent } from './footers-component/footers-component.component';
import { ContactPageModule } from './contact-page/contact-page.module';
import { ContactPageRoutingModule } from './contact-page/contact-page-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponentComponent,
    FootersComponentComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MainPageModuleModule,
     ContactPageModule,
     GalleryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
