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
//   a)	Executive Director
// b)	Director
// c)	Principal
// d)	Vice Principal
// e)	Advisor

  office1 = [{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
    position : "President",
    name:"Mitansh Gor",
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
    position : "Director",
    name:"Mitansh Gor",
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
    position : "Executive Director",
    name:"Mitansh Gor",
  }];
office2 = [{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
  position : "Vice Principal",
  name:"Mitansh Gor",
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfV8u036u1tRO31ZGkF9G96UqxxOpXCP6oDkJj3tVq0RPrwuX7wT_SQG51w-fWUvWlQc&usqp=CAU",
  position : "Advisor",
  name:"Mitansh Gor",
}
];


//   advisor: "Jap Purohit"
// advisorName: "Jap Purohit"
// createdAt: "2022-05-28T20:44:02.459Z"
// director: "https://drive.google.com/uc?export=view&id=1BpAPbgcBTThZJht9v_KRA_ace_ypKYcX"
// directorName: "Jap A. Purohit"
// excutiveDirector: "https://drive.google.com/uc?export=view&id=12t7o3tyGkMSJ4fo2EVmA3hbto3xmZgnG"
// excutiveDirectorName: "Jap Purohit"
// principal: "Jap Purohit"
// principalName: "Ram"
// updatedAt: "2022-05-29T05:20:02.580Z"
// vicePrincipalDirector: "Jap Purohit"
// vicePrincipalDirectorName: "Jap Purohit"
// __v: 0
// _id: "6292898e635e9542de103051"

officeBearerForm = new FormGroup({
  excutiveDirector: new FormControl('', ),
  director: new FormControl('', ),
  principal: new FormControl('', ),
  vicePrincipalDirector: new FormControl('', ),
  advisor: new FormControl('', ),


  excutiveDirectorName: new FormControl('', [Validators.required]),
  directorName: new FormControl('', [Validators.required]),
  principalName: new FormControl('', [Validators.required]),
  vicePrincipalDirectorName: new FormControl('', [Validators.required]),
  advisorName: new FormControl('', [Validators.required]),
});

aboutUsForm = new FormGroup({

  description :  new FormControl("", [Validators.required])
})

constructor(private primengConfig: PrimeNGConfig ,private adminService: AdminService ,private publicService:PublicService, private messageService: MessageService) {


  this.imageAdvisor = new File([""],"")
  this.imagePrincipal = new File([""],"")
  this.imageDirector = new File([""],"")
  this.imageExcutiveDirector = new File([""],"")
  this.imageVicePrincipalDirector = new File([""],"")

}

imageAdvisor:File;
imagePrincipal:File;
imageDirector:File;
imageExcutiveDirector:File;
imageVicePrincipalDirector:File;

ngOnInit() {

  this.getAboutUsData()

  this.getProjectBarrierData()

  this.primengConfig.ripple = true;



}

getProjectBarrierData(){

  // this.office1   1) ->president 2) ->director 3) ->executiveDirector
  // this.office1   1) ->vicePrincipal 2) ->advisor



  this.publicService.getOfficeBearer().subscribe(res => {
    console.log(res.data)
    this.office1[0].image = res.data. principal;
    this.office1[0].name = res.data.principalName;
    this.office1[1].image = res.data. director;
    this.office1[1].name = res.data.directorName;
    this.office1[2].image = res.data. excutiveDirector;
    this.office1[2].name = res.data.excutiveDirectorName;

    this.office2[0].image = res.data. vicePrincipalDirector;
    this.office2[0].name = res.data.vicePrincipalDirectorName;
    this.office2[1].image = res.data. advisor;
    this.office2[1].name = res.data.advisorName;

  },err=>{})
}



removeAddImage(str:string){

  if(str=='principal'){
    this.officeBearerForm.controls["principal"].setValue(null);
    this.imagePrincipal = new File([""],"")
  }
  else if(str=="director"){
    this.officeBearerForm.controls["director"].setValue(null);
    this.imageDirector = new File([""],"")
  }
  else if(str=='excutiveDirector'){
    this.officeBearerForm.controls["excutiveDirector"].setValue(null);
    this.imageExcutiveDirector = new File([""],"")
  }
  else if(str=="vicePrincipalDirector"){
    this.officeBearerForm.controls["vicePrincipalDirector"].setValue(null);
    this.imageVicePrincipalDirector = new File([""],"")
  }
  else if(str="advisor"){
    this.officeBearerForm.controls["advisor"].setValue(null);
    this.imageAdvisor = new File([""],"")
  }

}

changeDocData(event:Event,str:string){

  const target = event.target as HTMLInputElement

  if(str=='principal'){
    this.imagePrincipal=(target.files as FileList)[0]
    console.table(this.imagePrincipal)

  }
  else if(str=="director"){
    this.imageDirector=(target.files as FileList)[0]
    console.table(this.imageDirector)

  }
  else if(str=='excutiveDirector'){
    this.imageExcutiveDirector=(target.files as FileList)[0]
    console.table(this.imageExcutiveDirector)

  }
  else if(str=="vicePrincipalDirector"){
    this.imageVicePrincipalDirector=(target.files as FileList)[0]
    console.table(this.imageVicePrincipalDirector)

  }
  else if(str="advisor"){
    this.imageAdvisor=(target.files as FileList)[0]
    console.table(this.imageAdvisor)

  }
}

getAboutUsData(){

  this.publicService.getAboutUs().subscribe(res=>{
    this.aboutUsDetails = res.data.description
    console.log(res.data)
  },err=>{})
}


OfficeBearerSubmit() {

  var formData = this.officeBearerForm.value
// // formData.append("_id",this.officeBearerForm.value._id=="" || this.addFaculty.value._id==null ?"0":this.addFaculty.value._id)
// formData.append("image",this.imageAdvisor);
// formData.append("image",this.officeBearerForm.value.advisor);

// // formData.append("facultyName",this.addFaculty.value.facultyName);
// // formData.append("designation",this.addFaculty.value.designation);
// console.log(this.officeBearerForm.value)
// console.log(formData)
  this.adminService.updateOfficeBearner(formData).subscribe(res=>{


    if(res.status==200){

      this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
      this.displayModalOfficeBearer=false;
    }
    else if(res.status==-2){
      this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
    }
    else{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      // this.displayModal=false;
    }
  },err=>{

    console.log("DATA")
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });

    console.log(err)
  })
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
      this.displayModal=false;
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
