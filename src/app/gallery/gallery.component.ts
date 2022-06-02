import { PublicService } from './../service/public.service';
import { GalleryModule } from './gallery.module';
import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { AdminService } from '../service/admin.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthBehaviourService } from '../auth-behaviour.service';

@Component({
  selector: 'main-page-module',
  styleUrls: ['./gallery.component.css'],
  templateUrl: './gallery.component.html',
  providers: [MessageService],
  // encapsulation: ViewEncapsulation.Emulated
})
export class GalleryModuleComponenet {

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService,private authBehavior:AuthBehaviourService, private publicService: PublicService, private adminService:AdminService, private sanitizer: DomSanitizer) {
    this.image = new File([""],"")
    this.isAdminBoolean = this.authBehavior.isAdmin.getValue()

    this.radioName=""
    this.ngOnInit()
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.getAllImages()
  }

  image : File;
  isAdminBoolean:Boolean
  radioName:String;
  initialValue:number = 0;
  endValue:number = 0;
  state!: any[];


  changeDocData(event:Event){

    const target = event.target as HTMLInputElement

    this.image=(target.files as FileList)[0]

    console.table(this.image)
  }

  removeAddImage(){
    console.table("MIT");
    this.image = new File([""],"")
  }


  getAllImages(){


    this.publicService.getAllGalleryImages().subscribe(res=>{

    if(res.status==200){

      console.log(res)
      this.state = res.data.imageURL;
    this.initialValue=parseInt(res.data.maximumValue)
    this.endValue=parseInt(res.data.minimumValue)
      // this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
      console.log("WOW")
      console.log(this.state)
      console.log(res.data)

    }
    else if(res.status==-1){

      this.messageService.add({ key: 'toast', severity: 'warning', summary: 'Warning', detail: res.message });
    }


    },err=>{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });

    })
  }
  displayModal: boolean = false;
  showModalDialog() {
    this.image = new File([""],"")    
    this.displayModal = true;
  }



  addGalleryImage(){

    var formData = new FormData();
    formData.append("index",this.radioName=="addImageAtStart"?(this.initialValue).toString():(this.endValue).toString())
    formData.append("image",this.image);
    console.log(formData.get("image"))
    this.adminService.addGalleryImage(formData).subscribe(res=>{

      console.log(res)
      if(res.status==-1){
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      }
      else if(res.status==-2){
        this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
      }
      else if(res.status==200){

        if(this.radioName=="addImageAtStart"){
          this.initialValue+=1
          this.state.unshift(res.data)
        }
        else{
          this.endValue-=1
          this.state.push(res.data)

        }

        this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
        this.displayModal = false;
      }

    },err=>{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });
      this.displayModal = false;
    })


  }

  setIndexPosition(str:string){
    this.radioName=str;
  }

  deleteId:string="";
  showConfirm(id:any) {
    this.deleteId=id;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'error', summary:'Are you sure?', detail:'Confirm to proceed'});
}

onConfirm() {

  this.adminService.deleteGalleryImage(this.deleteId).subscribe(res=>{
    // status : 200 "Deleted Image Successfully"
    // status : -1 "Something went wrong"
    // status : -2 "Invalid Image ID"
    if(res.status==200){

      this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message});
      this.state = this.state.filter(obj=>obj._id!=this.deleteId)
    }
   else if(res.status==-1){
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
    }
    else if(res.status==-2){
      this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
    }
  },err=>{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });

  })
  this.messageService.clear('c');

}
onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}

}
