import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthBehaviourServiceService {

  authToken : BehaviorSubject<string>
  constructor() {

    this.authToken = new BehaviorSubject<string>("")
  }
}
