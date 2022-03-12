import { FacultyComponent } from './faculty-facility/faculty/faculty.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageModuleComponent } from './main-page-module/main-page-module.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GalleryModuleComponenet } from './gallery/gallery.component';
import { FacultyFacilityComponent } from './faculty-facility/faculty-facility.component';
import { FacilityComponent } from './faculty-facility/facility/facility.component';
import { NewsModuleComponent } from './news/news.component';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { CericulamComponent } from './cericulam/cericulam.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '',component : MainPageModuleComponent},
  {path:'contactUs',component:ContactPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:"gallery",component:GalleryModuleComponenet},
  {path:"f&f",component:FacultyFacilityComponent, children:
  [
    // { path: "", redirectTo: 'faculty', pathMatch: 'full'},
    { path: "", component:FacultyComponent  },
    { path: "facility", component: FacilityComponent },


  ]},

  {path:"news",component:NewsModuleComponent},
  {path:"cericulam",component:CericulamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
