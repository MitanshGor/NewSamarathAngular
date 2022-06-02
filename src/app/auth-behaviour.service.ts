import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthBehaviourService {
  isAdmin: BehaviorSubject<boolean>
  constructor() { 
    this.isAdmin = new BehaviorSubject<boolean>(false);
  }
}
