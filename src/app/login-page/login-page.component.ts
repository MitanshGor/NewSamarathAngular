import { HeadersComponentComponent } from './../headers-component/headers-component.component';
import { AuthBehaviourService } from './../auth-behaviour.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { regexData } from 'src/assets/regex';
import { AdminService } from '../service/admin.service';
import { PublicService } from '../service/public.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService]
})
export class LoginPageComponent {


  loginForm: FormGroup;
  forgotForm: FormGroup;

//https://stackoverflow.com/questions/42987293/refresh-header-after-login-in-angular2
  constructor(fb: FormBuilder ,private router: Router,
         private adminService : AdminService,private authBeahviour:AuthBehaviourService, private messageService: MessageService, private authBehaviour:AuthBehaviourService) {

    this.loginForm = new FormGroup({
      emailID: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex)])),
        password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.passwordRegex)])),
  });

  this.forgotForm = new FormGroup({
    email: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern(this.emailRegex)]))
});
this.isAdmin = this.authBehaviour.isAdmin.getValue()
   }



  emailRegex = regexData.email;
  passwordRegex = regexData.password;



//   Without it, your current regex only matches that you have 6 to 16 valid characters, it doesn't
//   validate that it has at least a number, and at least a special character. That's what the lookahead above is for.

// (?=.*[0-9]) - Assert a string has at least one number;
// (?=.*[!@#$%^&*]) - Assert a string has at least one special character.



  displayModal =false;
  forgotPasswordMethod(){

    this.displayModal=true;
  }

  forgotPasswordFormSubmit(){



    this.adminService.forgotPassword(this.forgotForm.value).subscribe(res=>{

        console.log(res)
        if (res.status == 200) {
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
        }
        else if(res.status == -2){
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Warning', detail: res.message });
        }
        else{
          this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Error', detail: res.message });
        }
      }, err => {
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err });
      })
  }

  OnFormSubmit(){


  }


  isAdmin:Boolean
  loginDataDetails(){

    // alert("Here")
    console.log(this.loginForm.value)
    this.adminService.login(this.loginForm.value).subscribe(res => {

      console.log(res)
      if (res.status == 200) {
        console.log(res)
      //  localStorage.setItem("authToken",JSON.stringify(res.data))
        // alert("login done");
        // this..authToken.next(resp.data.authToken)
       this.authBeahviour.login_user(true)
        // this.headersComponentComponent.ngOnInit()
        this.messageService.add({ key: 'toast', severity: 'success', summary: 'Successful Login', detail: res.message });
       setTimeout(() =>{
        this.router.navigateByUrl('/')
       
       },1000)
      }
      else{
        this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Invalid Details', detail: res.message });
      }
    }, err => {
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err });
    })

    }

}
