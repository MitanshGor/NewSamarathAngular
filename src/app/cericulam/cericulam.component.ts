import { NewsSubModel } from '../news-sub-model';
import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'main-page-module',
  templateUrl: './cericulam.component.html',
  styleUrls: ['./cericulam.component.css']
})
export class CericulamComponent {

  title="title";




  // data2 ={newsType : "Student Achivement" ,
  // data:[
  //   {
  //     title : "SCIENCE LAB",
  //     image:"http://localhost:4200/assets/images/11.jpg",
  //     desc:"Lorem ipsum, dd modi, dolorem quos dolores veniam accusamus illum deleniti quae, fugit labore? Placeat saepe voluptates magnam dignissimos dicta iste, debitis consequatur repellat ipsum, molestiae quo provident accusamus rerum officia. Dolorem consectetur minima, non sit itaque in odit suscipit iure, recusandae molestias libero, repellat vel ullam accusamus expedita! Impedit, provident esse? Culpa nulla eum nesciunt accusantium atque. Incidunt inventore, accusantium provident doloribus velit unde ipsa dolorem architecto."
  //   },
  //   {
  //     title : "SCIENCE LAB",
  //     image:"http://localhost:4200/assets/images/11.jpg",
  //     desc:"Lorem ipsum, dd modi, dolorem quos dolores veniam accusamus illum deleniti quae, fugit labore? Placeat saepe voluptates magnam dignissimos dicta iste, debitis consequatur repellat ipsum, molestiae quo provident accusamus rerum officia. Dolorem consectetur minima, non sit itaque in odit suscipit iure, recusandae molestias libero, repellat vel ullam accusamus expedita! Impedit, provident esse? Culpa nulla eum nesciunt accusantium atque. Incidunt inventore, accusantium provident doloribus velit unde ipsa dolorem architecto."
  //   },
  //   {
  //     title : "SCIENCE LAB",
  //     image:"http://localhost:4200/assets/images/11.jpg",
  //     desc:"Lorem ipsum, dd modi, dolorem quos dolores veniam accusamus illum deleniti quae, fugit labore? Placeat saepe voluptates magnam dignissimos dicta iste, debitis consequatur repellat ipsum, molestiae quo provident accusamus rerum officia. Dolorem consectetur minima, non sit itaque in odit suscipit iure, recusandae molestias libero, repellat vel ullam accusamus expedita! Impedit, provident esse? Culpa nulla eum nesciunt accusantium atque. Incidunt inventore, accusantium provident doloribus velit unde ipsa dolorem architecto."
  //   },
  // ]}
  // data =this.data2;
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  displayModal1: boolean = false;
  updateData1() {
    this.displayModal1 = true;
  }

  displayModal2: boolean = false;
  updateData2() {
    this.displayModal2 = true;
  }



  aboutUsSubmit(){}




}
