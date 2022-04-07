import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Pipe({
  name: 'authBehaviourService'
})
export class AuthBehaviourServicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  authToken : BehaviorSubject<string>
  constructor() {

    this.authToken = new BehaviorSubject<string>("")
  }

}
