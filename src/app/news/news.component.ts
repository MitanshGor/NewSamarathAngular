import { NewsSubModel } from './../news-sub-model';
import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'main-page-module',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsModuleComponent {

  title="title";




  data2 ={newsType : "Student Achivement" ,
  data:[
    {
      title : "SCIENCE LAB",
      image:"http://localhost:4200/assets/images/11.jpg",
      desc:"Lorem ipsum, dd modi, dolorem quos dolores veniam accusamus illum deleniti quae, fugit labore? Placeat saepe voluptates magnam dignissimos dicta iste, debitis consequatur repellat ipsum, molestiae quo provident accusamus rerum officia. Dolorem consectetur minima, non sit itaque in odit suscipit iure, recusandae molestias libero, repellat vel ullam accusamus expedita! Impedit, provident esse? Culpa nulla eum nesciunt accusantium atque. Incidunt inventore, accusantium provident doloribus velit unde ipsa dolorem architecto."
    },
    {
      title : "SCIENCE LAB",
      image:"http://localhost:4200/assets/images/11.jpg",
      desc:"Lorem ipsum, dd modi, dolorem quos dolores veniam accusamus illum deleniti quae, fugit labore? Placeat saepe voluptates magnam dignissimos dicta iste, debitis consequatur repellat ipsum, molestiae quo provident accusamus rerum officia. Dolorem consectetur minima, non sit itaque in odit suscipit iure, recusandae molestias libero, repellat vel ullam accusamus expedita! Impedit, provident esse? Culpa nulla eum nesciunt accusantium atque. Incidunt inventore, accusantium provident doloribus velit unde ipsa dolorem architecto."
    },
    {
      title : "SCIENCE LAB",
      image:"http://localhost:4200/assets/images/11.jpg",
      desc:"Lorem ipsum, dd modi, dolorem quos dolores veniam accusamus illum deleniti quae, fugit labore? Placeat saepe voluptates magnam dignissimos dicta iste, debitis consequatur repellat ipsum, molestiae quo provident accusamus rerum officia. Dolorem consectetur minima, non sit itaque in odit suscipit iure, recusandae molestias libero, repellat vel ullam accusamus expedita! Impedit, provident esse? Culpa nulla eum nesciunt accusantium atque. Incidunt inventore, accusantium provident doloribus velit unde ipsa dolorem architecto."
    },
  ]}
  data =this.data2;

}
