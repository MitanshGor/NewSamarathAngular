import { GalleryModule } from './gallery.module';
import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrimeNGConfig, MessageService } from 'primeng/api';

@Component({
  selector: 'main-page-module',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [MessageService]
})
export class GalleryModuleComponenet {

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  displayModal: boolean = false;
  showModalDialog() {
    this.displayModal = true;
  }



  gallerySubmit()
  {

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

}
