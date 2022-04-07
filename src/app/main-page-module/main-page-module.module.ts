import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeBearerImageComponentComponent } from '../../office-bearer-image-component/office-bearer-image-component.component';
import { MainPageModuleComponent } from './main-page-module.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CericulamComponent } from '../cericulam/cericulam.component';


@NgModule({
  declarations: [

    MainPageModuleComponent,
    OfficeBearerImageComponentComponent,
    // CericulamComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularEditorModule,
    BrowserModule,
     FormsModule,
     BrowserAnimationsModule,
     DialogModule,
     ButtonModule,
     ReactiveFormsModule




  ],
  exports: [
    OfficeBearerImageComponentComponent
  ]
})
export class MainPageModuleModule { }
