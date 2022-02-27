import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeBearerImageComponentComponent } from './office-bearer-image-component/office-bearer-image-component.component';
import { MainPageModuleComponent } from './main-page-module.component';


@NgModule({
  declarations: [

    MainPageModuleComponent,
    OfficeBearerImageComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OfficeBearerImageComponentComponent
  ]
})
export class MainPageModuleModule { }
