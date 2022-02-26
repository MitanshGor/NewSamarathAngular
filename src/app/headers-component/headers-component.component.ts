import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers-component',
  templateUrl: './headers-component.component.html',
  styleUrls: ['./headers-component.component.css']
})
export class HeadersComponentComponent implements OnInit {

  constructor() { }
  hamburger=true;

  ngOnInit(): void {
  }


  hamburgerClicked(){
    this.hamburger=!this.hamburger;
  }


}
