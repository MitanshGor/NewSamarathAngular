import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-bearer-image-component',
  templateUrl: './office-bearer-image-component.component.html',
  styleUrls: ['./office-bearer-image-component.component.css']
})
export class OfficeBearerImageComponentComponent implements OnInit {

  constructor() { }

  @Input()
  info ={ image: "", position: "", name: "", };
  ngOnInit(): void {
  }

}
