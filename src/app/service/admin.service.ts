import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  updateOfficeBearner(data:any):Observable<any>{
    return this,this.httpClient.post(environment.upload_api_url+"/updateOfficeBearer",data)
  }

  deleteGalleryImage(_id:string):Observable<any>{
    return this.httpClient.delete(environment.admin_api_url+"deleteImage/"+_id)
  }

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

  addFacility(data:any):Observable<any>{
    console.log(data)
    return this.httpClient.post(environment.upload_api_url+"/addUpdateFacility",data)
  }

  addFaculty(data:any):Observable<any>{
    return this.httpClient.post(environment.upload_api_url+"/addUpdateFaculty",data)
  }

  deleteFacility(id:any):Observable<any>{
    return this.httpClient.delete(environment.admin_api_url+"/deleteFacility/"+id)
  }

  addGalleryImage(formData: FormData):Observable<any>
  {
    return this.httpClient.post(environment.upload_api_url+"/addGallery",formData)
  }



  deleteFaculty(id:any):Observable<any>{
    return this.httpClient.delete(environment.admin_api_url+"/deleteFaculty/"+id)
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
  updateHoliday(data:any):Observable<any>{
    return this.httpClient.post(environment.upload_api_url+"/updateHoliday",data)
  }
  updateExamSchedule(data:any):Observable<any>{
    return this.httpClient.post(environment.upload_api_url+"/updateExamSchedule",data)
  }
  updateFessStructure(data:any):Observable<any>{
    return this.httpClient.post(environment.upload_api_url+"/updateFessStructure",data)
  }
  updateAlmanac(data:any):Observable<any>{
    return this.httpClient.post(environment.upload_api_url+"/updateAlmanac",data)
  }
  
  addUpdateExamPaper(data:any):Observable<any>{
    return this.httpClient.post(environment.upload_api_url+"/addUpdateExamPaper",data)
  }
  deleteExamPaper(standard:any,year:any):Observable<any>{
    return this.httpClient.delete(environment.admin_api_url+"/deletePaper/"+standard+"/"+year)
  }
  
  constructor(private httpClient : HttpClient) { }
}
