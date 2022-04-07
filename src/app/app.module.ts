import { NewsModuleComponent } from './news/news.component';
import { FacultyFacilityComponent } from './faculty-facility/faculty-facility.component';
import { RouterModule } from '@angular/router';
import { MainPageModuleModule } from './main-page-module/main-page-module.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponentComponent } from './headers-component/headers-component.component';
import { FootersComponentComponent } from './footers-component/footers-component.component';
import { ContactPageModule } from './contact-page/contact-page.module';
import { ContactPageRoutingModule } from './contact-page/contact-page-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GalleryModule } from './gallery/gallery.module';
import { FacultyFacilityModule } from './faculty-facility/faculty-facility.module';
import { PopupFormComponent } from './popup-form/popup-form.component';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsModule } from './news/news.module';
import { CericulamModule } from './cericulam/cericulam.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { DownloadsModule } from './downloads/downloads.module';
import { DownloadsModuleComponent } from './downloads/downloads.component';
import { AuthBehaviourServicePipe } from './pipe/auth-behaviour-service.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponentComponent,
    FootersComponentComponent,
    LoginPageComponent,
    FacultyFacilityComponent,
    PopupFormComponent,
    NewsModuleComponent,
    DownloadsModuleComponent,
    AdminlistComponent,
    AuthBehaviourServicePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MainPageModuleModule,
     DownloadsModule,
     CericulamModule,
     ContactPageModule,
     GalleryModule,
     FacultyFacilityModule,
    NewsModule,
     BrowserAnimationsModule,
     DialogModule,
     ButtonModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
