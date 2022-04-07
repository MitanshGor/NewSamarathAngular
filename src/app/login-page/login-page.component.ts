import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { regexData } from 'src/assets/regex';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  loginForm: FormGroup;
  forgotForm: FormGroup;


  constructor(fb: FormBuilder ) {

    this.loginForm = new FormGroup({
      email: new FormControl("", Validators.compose([
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

  }

  OnFormSubmit(){


  }


}
