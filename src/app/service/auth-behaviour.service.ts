import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Admin } from 'src/interfaces/admin';

@Injectable({
  providedIn: 'root',

})
export class AuthBehaviourService {


  adminToken : BehaviorSubject<Admin>

  constructor() {

    this.adminToken = new BehaviorSubject<Admin>({
      _id : "",
      fullName :"",
      // password
      // "$2b$10$y8hzwCMEQ4jSQO03gkfhoOZ29u8xklqxkSW4KYx0L9opdxSYj0jJy"
      emailID :"",
      phonenumber :"",
      roleName : "",
      decryptPassword : "",
      createdAt : new Date(),
      updatedAt : new Date(),

    })
  }

}
