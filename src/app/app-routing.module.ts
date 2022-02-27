import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageModuleComponent } from './main-page-module/main-page-module.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GalleryModuleComponenet } from './gallery/gallery.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '',component : MainPageModuleComponent},
  {path:'contactUs',component:ContactPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:"gallery",component:GalleryModuleComponenet}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
