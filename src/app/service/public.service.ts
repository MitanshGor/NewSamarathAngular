import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicService {



  login(data:any):Observable<any>
  {
    return this.httpClient.post(environment.public_api_url,data)
  }


  forgotPassword(data:any):Observable<any>
  {
    return this.httpClient.post(environment.public_api_url+"/forgotPassword",data)
  }

  // updatePassword(data:any):Observable<any>
  // {
  //   return this.httpClient.post(environment.common_api_url+"/updatePassword",data)
  // }

  // getFullProfileWithAttendence(employeeID:any):Observable<any>{
  //   return this.httpClient.post(environment.common_api_url+"/getFullProfileWithAttendence",employeeID)
  // }

  constructor(private httpClient : HttpClient) { }
}
