import { AuthBehaviourService } from './../auth-behaviour.service';
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

  selectedNewsType="";
  isAdminBoolean:Boolean
  data : any;
  clickNews(str:string){

    this.selectedNewsType = str;
    this.data = this.data2.filter((obj: { type: string; }) => obj.type==str);
    this.data = this.data[0]


  }

  constructor(private publicService:PublicService,private authBehavior:AuthBehaviourService){
    this.isAdminBoolean = this.authBehavior.isAdmin.getValue()
    
  }
  getApiData : any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.publicService.getNewsDetails().subscribe(res =>{

      console.log("RES")
      console.log(res)
      this.data2 = res.data;
      console.log("RES DATA")
      console.log(this.data2)
      this.clickNews("School Achievements")

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

  data2:any;
  // data2 ={data : [{"type":"Student Achivement", data:[
  //                                   {
  //                                         _id:"1",
  //                                         title : "SCIENCE LAB",
  //                                         photoURL:"http://localhost:4200/assets/images/11.jpg",
  //                                         description:"Lorem ipsum, dd modi, dolorem quos dolores veniam accusamus illum deleniti quae, fugit labore? Placeat saepe voluptates magnam dignissimos dicta iste, debitis consequatur repellat ipsum, molestiae quo provident accusamus rerum officia. Dolorem consectetur minima, non sit itaque in odit suscipit iure, recusandae molestias libero, repellat vel ullam accusamus expedita! Impedit, provident esse? Culpa nulla eum nesciunt accusantium atque. Incidunt inventore, accusantium provident doloribus velit unde ipsa dolorem architecto."
  //                                       , newsTypeID:"1"
  //                                   }
  //                               ],
  //                               "_id":"_id"
  //                 }
  //              ]
  //         }

          // data =


        }

