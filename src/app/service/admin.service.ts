import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  getAllAdmin():Observable<any>
  {
    return this.httpClient.get(environment.admin_api_url+"getAllAdmin")
  }


  addAdmin(data:any):Observable<any>{

    return this.httpClient.post(environment.admin_api_url+"addAdmin",data)

  }


  aboutUs(data:any):Observable<any>{
    return this.httpClient.put(environment.admin_api_url+"updateAboutUs",data)
  }
  deleteAdmin(id:string):Observable<any>{

    return this.httpClient.delete(environment.admin_api_url+"deleteAdmin/"+id)

  }

  updateAdmin(data:any):Observable<any>{
    return this.httpClient.put(environment.admin_api_url+"updateAdmin",data)
  }


  getAllApointmentOfThisYearAndMonth():Observable<any>{

    return this.httpClient.get(environment.admin_api_url+"getContactUs")

  }



  login(data:any):Observable<any>
  {
    return this.httpClient.post(environment.admin_api_url+ "authenticateAdmin",data)
  }


  forgotPassword(data:any):Observable<any>
  {
    return this.httpClient.post(environment.admin_api_url+"/forgotPassword",data)
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
