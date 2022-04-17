import { PublicService } from './../../service/public.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Component, Input, OnInit } from '@angular/core';
import { regexData } from 'src/assets/regex';
import { CustomValidator, requiredFileType } from 'src/app/service/custom-validator';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css'],
  providers: [MessageService]
})
export class FacilityComponent implements OnInit {


  ngOnInit(): void {
    this.primengConfig.ripple = true;
    // console.table()
    // console.table(this.router.getCurrentNavigation()!.extras.state)
    // this.patis = JSON.parse(this.state)
    this.getAllDataOfFacultyAndFacility();

  }




  getAllDataOfFacultyAndFacility(){
    console.log("RESRESERS")
    this.publicService.getFacility().subscribe(res=>{
      this.state =  res.data;
      console.table(this.state)
    },err=>{
      console.log(err);
    })
  }

  nameRegex = regexData.name;
  descriptionRegex = regexData.description;
  addFacility : FormGroup;
  updateFacility : FormGroup;


  state!: any[];
  image : File;

  constructor(private primengConfig: PrimeNGConfig,private messageService: MessageService, private adminService:AdminService , private publicService : PublicService, private router : Router) {

    this.getAllDataOfFacultyAndFacility();
     this.image = new File([""],""),

    this.addFacility = new FormGroup({
      // _id : new FormControl(""),
      title: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.nameRegex)])),
      image :new FormControl(),
      description: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.descriptionRegex)])),

  });


  this.updateFacility = new FormGroup({
    _id : new FormControl(""),
    title: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern(this.nameRegex)])),
    image :new FormControl("", Validators.compose([])),
    description: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern(this.descriptionRegex)])),

});

  }


  removeAddImage(){

    this.addFacility.controls["image"].setValue(null);

  }
  removeUpdateImage(){

    this.updateFacility.controls["image"].setValue(null);

  }

  changeDocData(event:Event){

    const target = event.target as HTMLInputElement

    this.image=(target.files as FileList)[0]
    console.log(this.image)

  }


  getProfilePicture(){
    return this.image;
  }
displayModal: boolean = false;
updatePopForm:boolean = false;


showModalDialog() {
  this.displayModal = true;
}

updateShowModalDialog(id : String) {

  this.updateFacility.controls["_id"].setValue(id);
  console.log(id)
  var x : any = this.state.filter(obj => obj._id == id)
  console.log(x)
  this.updateFacility.controls["title"].setValue(x[0].title);
  // this.updateFacility.controls["image"].setValue(x[0].photoURL);
  this.updateFacility.controls["description"].setValue(x[0].description);
  console.log(x[0])
  console.log(this.updateFacility.value)
  this.updatePopForm = true;
}



displayModalOfficeBearer: boolean = false;
showModalDialogForOfficeBearer() {
  this.displayModalOfficeBearer = true;
}



deltedFacilityId:any="";
showConfirm(id:any) {
  this.deltedFacilityId=id;
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'error', summary:'Are you sure?', detail:'Confirm to proceed'});
}

onConfirm() {
this.messageService.clear('c');
this.adminService.deleteFacility(this.deltedFacilityId).subscribe(res=>{


  if(res.status==200){
    this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });

    console.log(res)
    this.state = this.state.filter(obj => obj._id !== this.deltedFacilityId)
  }
  else if(res.status==-2){
    this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
  }
  else{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });

  }


},err=>{
  this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });

})
}
onReject() {
this.messageService.clear('c');
}

clear() {
this.messageService.clear();
}








// add the facility
aboutUsSubmit()
{
  var formData = new FormData();
  formData.append("image",this.image);
  formData.append("title",this.addFacility.value.title);
  formData.append("description",this.addFacility.value.description);
  this.adminService.addFacility(formData).subscribe(res=>{


    if(res.status==200){

      console.log(res.data)
      this.state = this.state.concat(res.data)
      console.table(res.data)
      this.displayModal=false;

      this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
    }
    else if(res.status==-2){
      this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
    }
    else{
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      this.displayModal=false;

    }

  },err=>{
    console.log(err)

    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });

  })

}

updateFacilityMethod(){
  var formData = new FormData();
  formData.append("image",this.image);
  formData.append("title",this.updateFacility.value.title);
  formData.append("_id",this.updateFacility.value._id);
  formData.append("description",this.updateFacility.value.description);

  this.adminService.addFacility(formData).subscribe(res=>{

    console.log(res.data)




  if(res.status==200){
    this.state = this.state.map(obj => obj._id===res.data._id ? res.data : obj);
    this.updatePopForm=false;
    this.messageService.add({ key: 'toast', severity: 'success', summary: 'Success', detail: res.message });
  }
  else if(res.status==-2){
    this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Warning', detail: res.message });
  }
  else{
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
    this.updatePopForm=false;
  }

  },err=>{
    console.log(err)
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });
  })

}





}



