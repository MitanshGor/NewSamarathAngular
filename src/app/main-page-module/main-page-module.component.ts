import { Admin } from './../../interfaces/admin';
import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { PublicService } from '../service/public.service';

@Component({
  selector: 'main-page-module',
  templateUrl: './main-page-module.component.html',
  styleUrls: ['./main-page-module.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageModuleComponent {

  title="title";
  aboutUsDetails=""

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

aboutUsForm = new FormGroup({

  description :  new FormControl("", [Validators.required])
})

constructor(private primengConfig: PrimeNGConfig ,private adminService: AdminService ,private publicService:PublicService, private messageService: MessageService) {}

ngOnInit() {

  this.getAboutUsData()


  this.primengConfig.ripple = true;



}

getAboutUsData(){

  this.publicService.getAboutUs().subscribe(res=>{
    this.aboutUsDetails = res.data.description
    console.log(res.data)
  },err=>{})
}



// this id for the update AboutUs popup Section
displayModal: boolean = false;
showModalDialog() {
  this.displayModal = true;
}



aboutUsSubmit(){

  this.adminService.aboutUs(this.aboutUsForm.value).subscribe(res=>{
    if (res.status == 200) {
      this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
      this.aboutUsDetails = this.aboutUsForm.controls['description'].value
    }
    if (res.status == -2) {
      this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
    }

    if (res.status == -1) {
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
    }
  },err=>{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });

  })
  // Logic about when  about us is submitted.
}





displayModalOfficeBearer: boolean = false;
showModalDialogForOfficeBearer() {
  this.displayModalOfficeBearer = true;
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
