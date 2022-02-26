import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageModuleComponent } from './main-page-module/main-page-module.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '',component : MainPageModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
