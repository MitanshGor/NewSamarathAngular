import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthBehaviourService {
 
  isAdmin: BehaviorSubject<boolean>
  constructor() { 
    this.isAdmin = new BehaviorSubject<boolean>(false);
  }

     login_user(button: boolean) {
        this.isAdmin.next(button)
    }
    
     get isLoggedIn() {
         return this.isAdmin.asObservable();
     }
  
  }


