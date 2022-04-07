import { AuthBehaviourServiceService } from './../pipe/auth-behaviour-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {


  constructor(private route:Router,private authBehaviourService:AuthBehaviourServiceService){

  }

  canActivate(


    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("LoginGuard called....");
      let authToken1 = localStorage.getItem("authToken")
      // if(authToken1){
      //   return true
      // }
      if(this.authBehaviourService.authToken.getValue().trim().length != 0){
        return true
      }

      if(this.authBehaviourService.authToken.getValue() == "")
      alert("Please Login")
      this.route.navigateByUrl("/login")
      return false;

  }

}
