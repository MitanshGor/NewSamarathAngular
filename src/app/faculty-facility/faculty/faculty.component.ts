import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { PublicService } from 'src/app/service/public.service';
import { regexData } from 'src/assets/regex';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers: [MessageService]
})
export class FacultyComponent implements OnInit {



  state!: any[];;
  addFaculty : FormGroup;

  nameRegex = regexData.name;
  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private publicService :PublicService , private adminService: AdminService) {

    this.getAllDataOfFacultyAndFacility();

 this.image = new File([""],""),

    this.addFaculty = new FormGroup({
      // _id : new FormControl(""),
      facultyName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.nameRegex)])),
      image :new FormControl(),
      designation: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.nameRegex)])),

  });
   }

  ngOnInit() {
    this.primengConfig.ripple = true;
        this.getAllDataOfFacultyAndFacility();

  }




  getAllDataOfFacultyAndFacility(){
    console.log("RESRESERS")
    this.publicService.getFaculty().subscribe(res=>{
      this.state =  res.data;
      console.table(this.state)
    },err=>{
      console.log(err);
    })
  }

  changeDocData(event:Event){

    const target = event.target as HTMLInputElement

    this.image=(target.files as FileList)[0]
    console.log(this.image)

  }

  displayModal: boolean = false;
  showModalDialog() {
    this.displayModal = true;
  }

  displayModalOfficeBearer: boolean = false;
  showModalDialogForOfficeBearer() {
    this.displayModalOfficeBearer = true;
  }


  deleteFacultyId:any;
  showConfirm(id:any) {
    this.deleteFacultyId =id;
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'error', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onConfirm() {

    this.messageService.clear('c');
    this.adminService.deleteFaculty(this.deleteFacultyId).subscribe(res=>{


      if(res.status==200){
        this.state = this.state.filter(obj => obj._id !== this.deleteFacultyId)

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

    })

  }
  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }


  image : File;

  removeAddImage(){

    this.addFaculty.controls["image"].setValue(null);
    this.image = new File([""],"")
  }


  aboutUsSubmit() {

    var formData = new FormData();
  formData.append("image",this.image);
  formData.append("facultyName",this.addFaculty.value.facultyName);
  formData.append("designation",this.addFaculty.value.designation);
  console.log("WOW")
  console.log(formData)
    this.adminService.addFaculty(formData).subscribe(res=>{


      if(res.status==200){
        this.state = this.state.concat(res.data)
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

      console.log("DATA")
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });

      console.log(err)
    })
  }

}
