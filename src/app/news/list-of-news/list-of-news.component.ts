import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsModel } from './../../../interfaces/news-model';

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { NewsSubModel } from 'src/interfaces/news-sub-model';
import { regexData } from 'src/assets/regex';


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

  addFacility : FormGroup;
  // updateFacility : FormGroup;



  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    // this.item = null;
    // this.image = new File([""],""),

   this.addFacility = new FormGroup({
     // _id : new FormControl(""),
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
showModalDialogForOfficeBearer() {
  this.displayModalUpdate = true;
}

showConfirm() {
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'error', summary:'Are you sure?', detail:'Confirm to proceed'});
}

onConfirm() {
this.messageService.clear('c');
}
onReject() {
this.messageService.clear('c');
}

clear() {
this.messageService.clear();
}


aboutUsSubmit()
{

}

}
