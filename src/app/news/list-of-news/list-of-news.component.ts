import { NewsModel } from './../../news-model';
import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-of-news',
  templateUrl: './list-of-news.component.html',
  styleUrls: ['./list-of-news.component.css'],
  providers: [MessageService]
})
export class ListOfNewsComponent implements OnInit {


  @Input()
  item!: NewsModel;

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    // this.item = null;
  }

ngOnInit() {
  this.primengConfig.ripple = true;
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
