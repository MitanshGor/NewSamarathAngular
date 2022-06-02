import { AuthBehaviourService } from './../auth-behaviour.service';
import { AdminService } from 'src/app/service/admin.service';
import { PublicService } from './../service/public.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsSubModel } from '../../interfaces/news-sub-model';
import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
  providers: [MessageService],
  styles: [`
      :host ::ng-deep .p-treeselect {
          width:20rem;
          display: inline-flex;
      }
  `],
})
export class DownloadsModuleComponent implements OnInit  {

  title = "title";
  isAdminBoolean:Boolean
  dialogTitle: any;
  nodes2!: any[];
  // itsSafe !: SafeHtml;
  clickeDataPdf : any;
  newsHeading : string ="";
  selectedNode: any;
  std=""
  year=""
  dropYear:any[];
  almanacForm : any;
  holidayAndVacation: any;
  feesStructure:any;
  QuesPapaer:any;
  examSchedule:any;
  updateDoc: FormGroup;
  updateAddQuestion: FormGroup;
  image : File;
  ngOnInit(): void {
  this.publicService.getDownloadAHFData().subscribe(res=>{
    this.almanacForm = res.data.almanacURL
    this.feesStructure = res.data.feesStructureURL
    this.examSchedule = res.data.examScheduleURL
    this.holidayAndVacation = res.data.holidayURL
  },err=>{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err });
  })

  this.publicService.getExamPaper().subscribe(res=>{
    console.log(res.data)
    this.QuesPapaer = this.formQuesPaper(res.data);

  },err=>{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err });
  })

  // throw new Error('Method not implemented.');
}

  constructor( private domSanitizer: DomSanitizer,private publicService:PublicService,private messageService: MessageService,private adminService:AdminService,private authBehavior:AuthBehaviourService){
    this.image = new File([""],"")
    this.dropYear = []
    this.isAdminBoolean = this.authBehavior.isAdmin.getValue()

    for(var i=1990;i<=(new Date().getFullYear());i++ ){
      this.dropYear.push(i)
    }
    this.updateDoc = new FormGroup({
      updateType : new FormControl(""),
      image :new FormControl(Validators.required),
    })

    this.updateAddQuestion = new FormGroup({
      standard : new FormControl("",Validators.required),
      year: new FormControl("", Validators.required),
      image :new FormControl(Validators.required),
    })
  }
  formQuesPaper(data:any){
    var dataToSet = []
    for(let d in data){
      var o = {
        'std':d,
        'data': [] as any
      }
      for(let paper in data[d]){
        o['data'].push({year:paper,link:data[d][paper]})
      }
      dataToSet.push(o)
    }
    console.log(dataToSet)
    return dataToSet
  }
  clickedBtn(data : string , heading:string)
  {

    this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(data);
    this.newsHeading=heading;
    // alert(data)
    // alert(heading)
  }

  clickedBtnDiff(data : string ,heading:string ,std:string , year:string){


    this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(data);
    this.newsHeading=heading;
    this.std = std
    this.year=year;

  }


  displayModal: boolean = false;
  displayModal1: boolean = false;
  showModalDialog1(){
    this.displayModal = false;
    this.displayModal1 = true;
  }
  showModalDialog(data:any) {
    if(data==='Almanac Form'){
      this.dialogTitle = "Update Almance Form"
      this.updateDoc.patchValue({
        'updateType':data
      })
    }else if(data==='Holidays and Vacation'){
      this.dialogTitle = 'Update Holidays and Vacation';
      this.updateDoc.patchValue({
        'updateType':data
      })

    }else if(data==='Fees Structure'){
      this.dialogTitle = 'Update Fees Structure'
      this.updateDoc.patchValue({
        'updateType':data
      })

    }else if(data==='Question Bank'){
      this.dialogTitle = 'Update Question Paper'
      this.updateAddQuestion.patchValue({
        'standard': this.std,
        'year': this.year
      })
    }else if(data==='Exam Schedule'){
      this.dialogTitle = 'Update Exam Schedule'
      this.updateDoc.patchValue({
        'updateType':data
      })

    }else{
      this.dialogTitle = data
      this.updateDoc.patchValue({
        'updateType':data
      })
    }
    // console.log(data)
    this.displayModal = true;
  }

  removeAddImage(){
    this.updateDoc.controls["image"].setValue(null);
    this.updateAddQuestion.controls["image"].setValue(null);
    this.image = new File([""],"")
  }
  cancelSubmit(){
    this.updateDoc.controls["image"].setValue(null);
    this.updateAddQuestion.controls["image"].setValue(null);
    this.image = new File([""],"")
    this.updateDoc.reset();
    this.updateAddQuestion.reset();
    this.displayModal1 = false;
    this.displayModal = false;
  }
  changeDocData(event:Event){
    const target = event.target as HTMLInputElement
    this.image=(target.files as FileList)[0]
    //console.table(this.image)
  }

  updateDocSubmit(){
    var formData = new FormData();
    formData.append("image",this.image)
    if(this.updateDoc.value.updateType==='Almanac Form'){
      this.adminService.updateAlmanac(formData).subscribe(res=>{
        if(res.status==200){
          this.almanacForm = res.data.url
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
          this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(this.almanacForm);
        }
        else if(res.status==-2){
          this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
        }
        else if(res.status==-1){
          this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
        }
      },err=>{
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err});
      })
    }
    //
    else if(this.updateDoc.value.updateType==='Holidays and Vacation'){
      this.adminService.updateHoliday(formData).subscribe(res=>{
        if(res.status==200){
          this.holidayAndVacation = res.data.url
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
          this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(this.holidayAndVacation);
        }
        else if(res.status==-2){
          this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
        }
        else if(res.status==-1){
          this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
        }
      },err=>{
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err});
      })
    }
    //Fees Structure
    else if(this.updateDoc.value.updateType==='Fees Structure'){
      this.adminService.updateFessStructure(formData).subscribe(res=>{
        if(res.status==200){
          this.feesStructure = res.data.url
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
          this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(this.feesStructure);
        }
        else if(res.status==-2){
          this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
        }
        else if(res.status==-1){
          this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
        }
      },err=>{
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err});
      })
    }
    //Exam Schedule
    else if(this.updateDoc.value.updateType==='Exam Schedule'){
      this.adminService.updateExamSchedule(formData).subscribe(res=>{
        if(res.status==200){
          this.examSchedule = res.data.url
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
          this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(this.examSchedule);
        }
        else if(res.status==-2){
          this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
        }
        else if(res.status==-1){
          this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
        }
      },err=>{
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err});
      })
    }
    this.cancelSubmit()
  }
  updateAddQuestionSubmit(){
    var formData = new FormData();
    formData.append("standard",this.updateAddQuestion.value.standard)
    formData.append("image",this.image)
    formData.append("year",this.updateAddQuestion.value.year)
    this.adminService.addUpdateExamPaper(formData).subscribe(res=>{
      if(res.status==200){
        this.QuesPapaer=this.formQuesPaper(res.data)
        this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(res.data[this.std][this.year]);
        this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
      }
      else if(res.status==-2){
        this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
      }
      else if(res.status==-1){
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      }
    },err=>{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err});
    })
    this.cancelSubmit()
  }
  addQuestionSubmit(){
    var formData = new FormData();
    formData.append("standard",this.updateAddQuestion.value.standard)
    formData.append("image",this.image)
    formData.append("year",this.updateAddQuestion.value.year)
    this.adminService.addUpdateExamPaper(formData).subscribe(res=>{
      if(res.status==200){
        this.QuesPapaer=this.formQuesPaper(res.data)
        //this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(res.data[this.std][this.year]);
        this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
      }
      else if(res.status==-2){
        this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
      }
      else if(res.status==-1){
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      }
    },err=>{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err});
    })
    this.cancelSubmit()
  }
  showConfirm(standard:any,year:any) {
    console.log('Bluh')
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'error', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }
  onConfirm() {

    this.messageService.clear('c');
    this.adminService.deleteExamPaper(this.std,this.year).subscribe(res=>{


      if(res.status==200){
        this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl('');
        this.QuesPapaer = this.formQuesPaper(res.data)
        this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
      }
      else if(res.status==-2){
        this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
      }
      else{
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
        this.displayModal=false;
      }
    },err=>{

    })

  }
  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }

}





interface SafeValue {}
interface SafeHtml extends SafeValue {}

abstract class SafeValueImpl implements SafeValue {
  abstract getTypeName(): string;

}

class SafeHtmlImpl extends SafeValueImpl implements SafeHtml {
  getTypeName() { return 'HTML'; }
}

// class Temp extends DomSanitizer {
//   bypassSecurityTrustHtml(value: string): SafeHtml {
//     return new SafeHtmlImpl(value);
//   }
// }
