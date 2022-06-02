import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PublicService } from '../service/public.service';
import { DataService } from '../service/data-service';

@Component({
  selector: 'main-page-module',
  templateUrl: './faculty-facility.component.html',
  styleUrls: ['./faculty-facility.component.css']
})
export class FacultyFacilityComponent implements OnInit{

  title="title";
  constructor(private  publicService: PublicService,private _dataService:DataService){}
  ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  //
 }



  // facultyData !: { "createdAt": ""; "description": ""; "photoURL": ""; "title": ""; "updatedAt": ""; "__v": 0; "_id": ""; }[];

  // facultyData !: { "createdAt": ""; "description": ""; "photoURL": ""; "title": ""; "updatedAt": ""; "__v": 0; "_id": ""; }[];
  facilityData: string = "";



}
