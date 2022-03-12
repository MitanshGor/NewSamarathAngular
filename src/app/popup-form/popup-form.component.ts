import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent implements OnInit {




  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  displayModal: boolean = true;

  // displayBasic: boolean = false;

  // displayBasic2: boolean = false;

  // displayMaximizable: boolean = false;

  // displayPosition: boolean = false;

  // position!: string;

  showModalDialog() {
      this.displayModal = true;
  }

  // showBasicDialog() {
  //     this.displayBasic = true;
  // }

  // showBasicDialog2() {
  //     this.displayBasic2 = true;
  // }

  // showMaximizableDialog() {
  //     this.displayMaximizable = true;
  // }

  // showPositionDialog(position: string) {
  //     this.position = position;
  //     this.displayPosition = true;
  // }


}
