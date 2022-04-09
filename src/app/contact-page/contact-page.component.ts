import { AdminService } from './../service/admin.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { regexData } from 'src/assets/regex';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { MessageService } from 'primeng/api';
import { PublicService } from '../service/public.service';

@Component({
  selector: 'main-page-module',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  providers: [MessageService]
})
export class ContactPageComponent {

  title="title";

  emailRegex = regexData.email;
  passwordRegex = regexData.password;
  nameRegex = regexData.name;
  contactRegex = regexData.contact;


  isAdmin =false;
//   Without it, your current regex only matches that you have 6 to 16 valid characters, it doesn't
//   validate that it has at least a number, and at least a special character. That's what the lookahead above is for.

// (?=.*[0-9]) - Assert a string has at least one number;
// (?=.*[!@#$%^&*]) - Assert a string has at least one special character.

    ngOnInit(){

      var x = JSON.parse(localStorage.getItem("authToken") || "").roleName;
      this.isAdmin =  (x=="ADMIN" || x=="SUPER ADMIN") ? true : false;
    }

  contactForm: FormGroup;

  constructor(fb: FormBuilder , private adminService :  AdminService , private messageService : MessageService, private publicService : PublicService) {

          this.contactForm = new FormGroup({
            name: new FormControl("", Validators.compose([
              Validators.required,
              Validators.pattern(this.nameRegex)])),
            contact :new FormControl("", Validators.compose([
                Validators.required,
                Validators.pattern(this.contactRegex)])),
            email: new FormControl("", Validators.compose([
              Validators.required,
              Validators.pattern(this.emailRegex)])),
            subject : new FormControl("", Validators.compose([
                Validators.required])),
            message :  new FormControl("", Validators.compose([
                  Validators.required])),
        });




      }


      onKeyDown() {
          let trimmed = this.contactForm.get('contact')?.value.replace(/\s+/g, '');

          if (trimmed.length > 12) {
            trimmed = trimmed.substr(0, 12);
          }
          trimmed = trimmed.replace(/-/g,'');
          let numbers = [];
          numbers.push(trimmed.substr(0,3));
          if(trimmed.substr(3,3)!=="")
          numbers.push(trimmed.substr(3,3));
          if(trimmed.substr(6,4)!="")
          numbers.push(trimmed.substr(6,4));
          this.contactForm.controls["contact"].setValue(numbers.join('-'));
      }






      exccelMethod(){

        let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('ContactUs');
    var a=  new Date().toLocaleString('en-us',{month:'long', year:'numeric'})
    worksheet.columns = [
	  {header: 'Serial Number', key:'serial', width:30},
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Email-ID', key: 'email', width: 40 },
      { header: 'Phone Number', key: 'mobile', width: 40 },
      { header: 'Subject', key: 'subject', width: 40 },
      { header: 'Message', key: 'message', width: 40},
	 { header: 'Request At', key: 'request', width: 40}
    ];

    this.adminService.getAllApointmentOfThisYearAndMonth().subscribe(res=>{
        if(res.status==200){
		var s = 1
          res.data.map((d: { name: any; email: any; mobile: any; subject: any; message: any; createdAt: string | number | Date; })=>{
            worksheet.addRow({serial:s,name:d.name,email:d.email,mobile:d.mobile,subject:d.subject,message:d.message,request:new Date(d.createdAt).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})},"n");
			s = s+1;
          })
        }
        workbook.xlsx.writeBuffer().then((data) => {
          let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          fs.saveAs(blob, a+'.xlsx');
        })
    },error=>{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: error });
      console.log(error)
    })

    }


    submitContactUS(){

      this.publicService.contactUs(this.contactForm.value).subscribe(res=>{
        if(res.status==200){
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
          console.log(res)
        }
        else{
          this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Error', detail: res.message });
          console.log(res)
        }
      },err=>{
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err });
        console.log(err)
      })
    }

}






