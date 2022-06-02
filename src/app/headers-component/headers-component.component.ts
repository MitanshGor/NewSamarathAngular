import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthBehaviourService } from '../auth-behaviour.service';

@Component({
  selector: 'app-headers-component',
  templateUrl: './headers-component.component.html',
  styleUrls: ['./headers-component.component.css']
})
export class HeadersComponentComponent implements OnInit,OnChanges {

  constructor(private authBehavior : AuthBehaviourService) { 
    this.isAdminBoolean = this.authBehavior.isAdmin.getValue()
    if(this.isAdminBoolean){
      this.loginButton="Logout"
    }else{
      this.loginButton="Admin Login"
    }
  }
  hamburger=true;
  isAdminBoolean:boolean
  loginButton:string
  ngOnInit(): void {
    this.isAdminBoolean = this.authBehavior.isAdmin.getValue()
  
    if(this.isAdminBoolean){
      this.loginButton="Logout"
    }else{
      this.loginButton="Admin Login"
    }
  }

  ngOnChanges(){
    this.isAdminBoolean = this.authBehavior.isAdmin.getValue()
  
    if(this.isAdminBoolean){
      this.loginButton="Logout"
    }else{
      this.loginButton="Admin Login"
    }
  }

  hamburgerClicked(){
    this.hamburger=!this.hamburger;
  }


}
