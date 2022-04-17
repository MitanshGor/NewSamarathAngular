
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()

export class DataService {

  private paramSource = new BehaviorSubject({"facilityModel":[{}],"facltyModel":[]});
  sharedParam = this.paramSource.asObservable();

  constructor() { }

  changeParam(param:any) {
    this.paramSource.next(param)
  }


}
