import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css'],
  providers: [MessageService]
})
export class FacilityComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig,private messageService: MessageService) {}

ngOnInit() {
  this.primengConfig.ripple = true;
}

displayModal: boolean = false;
showModalDialog() {
  this.displayModal = true;
}

displayModalOfficeBearer: boolean = false;
showModalDialogForOfficeBearer() {
  this.displayModalOfficeBearer = true;
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
