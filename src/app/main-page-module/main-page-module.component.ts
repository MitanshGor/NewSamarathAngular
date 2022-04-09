import { Admin } from './../../interfaces/admin';
import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'main-page-module',
  templateUrl: './main-page-module.component.html',
  styleUrls: ['./main-page-module.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageModuleComponent {

  title="title";

  aboutUsDetails =`
  <li>Institution is established in 1980 with great pioneers of Late Smt. T.C. Mahadevia and Late Shri Shri Raju S. Mahadevia.</li>

  <li>Run with efficiency till this date the school feels proud to host Std. 10th, 12th Science and 12th Commerce every year to the board Examination.</li>

  <li>Undoubtedly the school is begins with Kinder Garten fully air conditioned class rooms, display boards and well equipped learning patterns – Timings 9-00 a.m. to 12-00 noon.</li>

  <li> Primary section of our institution is basically a concrete platform for a child who can nourish and learn to develop as a better citizen.</li>

  <li>The school timing for this section is from 12-30 noons to 5-20 p.m. class 1 to 7.</li>

  <li>The high school and higher secondary sections of this institution is well known for its alleviating preserve on their respective subjects. </li>

  <li> Guided by experienced and well qualified faculty members are our added feature.</li>

  <li> Purely under Gujarat Secondary and Higher Secondary Education Board’s rule. </li>

  <li> We allocated every enrolled student to appear the board examination without the fear concept.</li>

  <li>The school is also a host of conducting the Board Examination for Std. X and XII-Science, Commerce and Arts streams CENTRES.</li>

  <li>We wish to bear a banner “SOLUTION TO ALL LEARNINGS.”</li>`
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

  description :  new FormControl('', [Validators.required])
})


constructor(private primengConfig: PrimeNGConfig ,private adminService: AdminService , private messageService: MessageService) {}

ngOnInit() {

  
  this.primengConfig.ripple = true;

  this.adminService.getAllAdmin().subscribe(res=>{
    console.log(res);
  },err=>{

  })

}




// this id for the update AboutUs popup Section
displayModal: boolean = false;
showModalDialog() {
  this.displayModal = true;
}
aboutUsSubmit(){

  this.adminService.aboutUs(this.aboutUsDetails).subscribe(res=>{
    if (res.status == 200) {
      this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
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
