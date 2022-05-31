import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsModel } from './../../../interfaces/news-model';

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { NewsSubModel } from 'src/interfaces/news-sub-model';
import { regexData } from 'src/assets/regex';
import { AdminService } from 'src/app/service/admin.service';
import { NewsTypeData } from 'src/interfaces/news-type-data';


@Component({
  selector: 'app-list-of-news',
  templateUrl: './list-of-news.component.html',
  styleUrls: ['./list-of-news.component.css'],
  providers: [MessageService]
})
export class ListOfNewsComponent implements OnInit , OnChanges {


  @Input()
  item!: NewsSubModel;

  nameRegex = regexData.name;
  descriptionRegex = regexData.description;

  @Input()
  newsType!:string;
  newsTypeId!: string;
  image : File;

  addNews : FormGroup;
  updateNews : FormGroup;
  // updateFacility : FormGroup;



  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService , private adminService:AdminService) {
    // this.item = null;
    // this.image = new File([""],""),

    this.image = new File([""],""),
    this.addNews = new FormGroup({
      _id : new FormControl(""),
       title: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern(this.nameRegex)])),
       image :new FormControl(null,Validators.required),
       description: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern(this.descriptionRegex)])),


   });

   this.updateNews = new FormGroup({
    _id : new FormControl(""),
     title: new FormControl("", Validators.compose([
       Validators.required,
       Validators.pattern(this.nameRegex)])),
     image :new FormControl(),
     description: new FormControl("", Validators.compose([
       Validators.required,
       Validators.pattern(this.descriptionRegex)])),


 });


  }

ngOnInit() {
  this.primengConfig.ripple = true;
}

ngOnChanges(){
  console.log(this.item)

  this.newsTypeId = this.item.id;
}
displayModal: boolean = false;
showModalDialog() {
  this.displayModal = true;
}

displayModalUpdate: boolean = false;
updateNewsId:string="";
showModalDialogForOfficeBearer(str:string) {

   const x = this.item.data.filter(obj => obj._id==str);

  this.updateNews.patchValue({
    title: x[0].title,
    description :x[0].description,
    _id : str,
  })
  this.displayModalUpdate = true;
  this.updateNewsId =str;
}


deleteNewsId : string = "";
showConfirm(str:string) {
  this.messageService.clear();
  this.deleteNewsId = str;
  this.messageService.add({key: 'c', sticky: true, severity:'error', summary:'Are you sure to Delete?', detail:'Confirm to proceed'});
}

onConfirm() {
this.messageService.clear('c');
  this.deleteNewsData();

}
onReject() {
this.messageService.clear('c');
}

clear() {
this.messageService.clear();
}



removeAddImage(){

  this.addNews.controls["image"].setValue(null);
  this.image = new File([""],"")
  this.updateNews.controls["image"].setValue(null);

}


changeDocData(event:Event){

  const target = event.target as HTMLInputElement

  this.image=(target.files as FileList)[0]
  console.log(this.image)

}

aboutUsSubmit(){

  // {
  //   description:
  //   title:
  //   newsTypeID:
  //   image: File
  //   }

  var formData  = new FormData();
  formData.append("description", this.addNews.value.description)
  formData.append("title", this.addNews.value.title)
  formData.append("newsTypeID", this.newsTypeId)
  formData.append("image", this.image)
  this.adminService.addNews(formData).subscribe(res=>{

    if(res.status==200){

      this.item.data.push(res.data)
      this.displayModal=false;

      this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });

      this.image = new File([""],"")
      this.addNews.reset();

    }
    else if(res.status==-2){
      this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
    }
    else{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      this.displayModal=false;
    }
  },err=>{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });
  })



}

deleteNewsData(){

  this.adminService.deleteNewsData(this.deleteNewsId).subscribe(res=>{
    if(res.status==200){

       this.item.data = this.item.data.filter(obj => obj._id!=this.deleteNewsId)

      this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
    }
    else if(res.status==-2){
      this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
    }
    else{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
    }
  },err=>{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });
  })

}


updateNewsData(){



  var formData  = new FormData();
  formData.append("_id",this.updateNewsId)
  formData.append("description", this.updateNews.value.description)
  formData.append("title", this.updateNews.value.title)
  formData.append("newsTypeID", this.newsTypeId)
  formData.append("image", this.image)
  this.adminService.updateNews(formData).subscribe(res=>{

    if(res.status==200){

      this.displayModal=false;

      this.item.data = this.item.data.map(obj => obj._id===res.data._id ? res.data : obj);
      this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });

      this.image = new File([""],"")
      this.updateNews.reset();

    }
    else if(res.status==-2){
      this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
    }
    else{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      this.displayModal=false;
    }
  },err=>{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });
  })



}

}
