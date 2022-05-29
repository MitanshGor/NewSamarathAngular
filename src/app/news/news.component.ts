import { NewsSubModel } from '../../interfaces/news-sub-model';
import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PublicService } from '../service/public.service';

@Component({
  selector: 'main-page-module',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsModuleComponent {

  title="title";


  constructor(private publicService:PublicService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.publicService.getNewsDetails().subscribe(res =>{

      console.log(res.data)

    },err=>{

    } )




  }


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

  data2 ={data : [{"type":"Student Achivement", data:[
                                    {
                                          _id:"1",
                                          title : "SCIENCE LAB",
                                          photoURL:"http://localhost:4200/assets/images/11.jpg",
                                          description:"Lorem ipsum, dd modi, dolorem quos dolores veniam accusamus illum deleniti quae, fugit labore? Placeat saepe voluptates magnam dignissimos dicta iste, debitis consequatur repellat ipsum, molestiae quo provident accusamus rerum officia. Dolorem consectetur minima, non sit itaque in odit suscipit iure, recusandae molestias libero, repellat vel ullam accusamus expedita! Impedit, provident esse? Culpa nulla eum nesciunt accusantium atque. Incidunt inventore, accusantium provident doloribus velit unde ipsa dolorem architecto."
                                        , newsTypeID:"1"
                                    }
                                ],"_id":"_id"
                }
                ,{"type":"Student Achivement", data:[],"id":"_id"},{"type":"Student Achivement", data:[],"id":"_id"}]}

  data =this.data2;

}
