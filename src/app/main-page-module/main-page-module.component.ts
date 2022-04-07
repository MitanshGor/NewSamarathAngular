import { Admin } from './../../interfaces/admin';
import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';

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
  }];
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

officeBearerForm = new FormGroup({
  excutiveDirector: new FormControl('', [Validators.required]),
  director: new FormControl('', [Validators.required]),
  principal: new FormControl('', [Validators.required]),
  vicePrincipalDirector: new FormControl('', [Validators.required]),
  advisor: new FormControl('', [Validators.required]),


  excutiveDirectorName: new FormControl('', [Validators.required]),
  directorName: new FormControl('', [Validators.required]),
  principalName: new FormControl('', [Validators.required]),
  vicePrincipalDirectorName: new FormControl('', [Validators.required]),
  advisorName: new FormControl('', [Validators.required]),
});



constructor(private primengConfig: PrimeNGConfig ,private adminService: AdminService) {}

ngOnInit() {
  this.primengConfig.ripple = true;

  this.adminService.getAllAdmin().subscribe(res=>{
    console.log(res);
  },err=>{

  })

}

displayModal: boolean = false;
showModalDialog() {
  this.displayModal = true;
}

displayModalOfficeBearer: boolean = false;
showModalDialogForOfficeBearer() {
  this.displayModalOfficeBearer = true;
}


aboutUsSubmit(){
                  //Logic about when  about us is submitted.
}
OfficeBearerSubmit(){

                  console.log('Valid?', this.officeBearerForm.valid); // true or false
                  console.log('Name', this.officeBearerForm.value);
          }








htmlContent = '';
config: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: '15rem',
  minHeight: '5rem',
  placeholder: 'Enter text here...',
  translate: 'no',
  defaultParagraphSeparator: 'p',
  defaultFontName: '',
  fonts: [
    {class: 'Roboto Slab, serif', name: 'Roboto Slab, serif'},

  ],
  toolbarHiddenButtons: [
    [
      'undo',
      'redo',
      'italic',
      'underline',
      'strikeThrough',
      'subscript',
      'superscript',
      'justifyLeft',
      'justifyCenter',
      'justifyRight',
      'justifyFull',
      'insertUnorderedList',
      'indent',
      'outdent',
      'heading',
      'fontName',
    ],
    [
      'fontSize',
      'textColor',
      'backgroundColor',
      'customClasses',
      'link',
      'unlink',
      'insertImage',
      'insertVideo',
      'insertHorizontalRule',
      'removeFormat',
      'toggleEditorMode',
    ],
  ],
  customClasses: [
    {
      name: "quote",
      class: "quote",
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: "titleText",
      class: "titleText",
      tag: "h1",
    },
  ]
};




}
