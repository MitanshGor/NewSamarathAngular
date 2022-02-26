import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'main-page-module',
  templateUrl: './main-page-module.component.html',
  styleUrls: ['./main-page-module.component.css']
})
export class MainPageModuleComponent {

  title="title";
  office1 = [{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
    position : "Vice President",
    name:"Mitansh Gor",
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
    position : "Vice President",
    name:"Mitansh Gor",
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
    position : "Vice President",
    name:"Mitansh Gor",
  }
];
office2 = [{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
  position : "Vice President",
  name:"Mitansh Gor",
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
  position : "Vice President",
  name:"Mitansh Gor",
}
];




}
