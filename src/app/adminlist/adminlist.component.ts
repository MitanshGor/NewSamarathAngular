import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { regexData } from 'src/assets/regex';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css'],
  providers: [MessageService]
})
export class AdminlistComponent implements OnInit {

  addAdmin: FormGroup;
  emailRegex = regexData.email;
  passwordRegex = regexData.password;
  nameRegex = regexData.name;
  contactRegex = regexData.contact;
  // UpdateAdmin : FormGroup;


  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private adminService: AdminService) {

    this.addAdmin = new FormGroup({
      fullName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.nameRegex)])),
      emailID: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex)])),
      phonenumber: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.contactRegex)])),
      roleName: new FormControl("ADMIN"),
      password: new FormControl("mit@1224", Validators.compose([
        Validators.required,
        Validators.pattern(this.passwordRegex)])),
      updatedAt: new FormControl(""),
      createdAt: new FormControl("")
    });




  }


  onKeyDown() {
    // alert("wrw")
    let trimmed = this.addAdmin.get('phonenumber')?.value.replace(/\s+/g, '');

    if (trimmed.length > 12) {
      trimmed = trimmed.substr(0, 12);
    }
    trimmed = trimmed.replace(/-/g, '');
    let numbers = [];
    numbers.push(trimmed.substr(0, 3));
    if (trimmed.substr(3, 3) !== "")
      numbers.push(trimmed.substr(3, 3));
    if (trimmed.substr(6, 4) != "")
      numbers.push(trimmed.substr(6, 4));
    this.addAdmin.controls["phonenumber"].setValue(numbers.join('-'));
  }

  displayModalUpdate = false;
  updateMethod(id:string) {


    var data  = this.listOfAdmins.find(x=>x._id == id)
    this.addAdmin.controls['emailID'].setValue(data.emailID);
    this.addAdmin.controls['fullName'].setValue(data.fullName);
    this.addAdmin.controls['phonenumber'].setValue(data.phonenumber);
    this.addAdmin.controls['password'].setValue(data.password);
    this.currentDateUpdated = new Date((new Date()).toISOString().substring(0, 10));
    this.displayModalUpdate = true;


  }













  listOfAdmins: Array<any> = []

  getAllAdminDetails() {

    this.adminService.getAllAdmin().subscribe(res => {
      this.listOfAdmins = res.data;
      console.log(this.listOfAdmins)
      // alert(res.message)
      if (res.status != 200) {
        this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Error', detail: res.message });
      }
    }, err => {
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err });
    })
  }


  ngOnInit() {


    this.getAllAdminDetails()
    this.primengConfig.ripple = true;
  }



  currentDateCreated: Date = new Date();
  currentDateUpdated: Date = new Date();
  displayModal: boolean = false;

  showModalDialog() {

    this.currentDateCreated = new Date((new Date()).toISOString().substring(0, 10));
    this.currentDateUpdated = new Date((new Date()).toISOString().substring(0, 10));
    this.displayModal = true;

  }





  displayModalOfficeBearer: boolean = false;
  showModalDialogForOfficeBearer() {
    this.displayModalOfficeBearer = true;
  }






  aboutUsSubmit() {
    console.log(this.addAdmin.value)
    this.adminService.addAdmin(this.addAdmin.value).subscribe(res => {


      if (res.status == -1) {
        this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Error', detail: res.message });
      }
      else if (res.status == 200) {
        this.messageService.add({ key: 'toast', severity: 'success', summary: 'Registered !!', detail: res.message });
        // alert('Data  is added in DB')
        this.addAdmin.controls['updatedAt'].setValue(new Date())
        this.addAdmin.controls['createdAt'].setValue(new Date())
        this.listOfAdmins.push(this.addAdmin.value)
      }
      else {
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      }

    }, err => {

      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });
      console.error(err)
    })
  }


  deleteId: string = "";
  showConfirm(id: string) {
    // alert(id)
    this.deleteId = id;
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'error', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onConfirm() {
    this.adminService.deleteAdmin(this.deleteId).subscribe(res => {
      if (res.status == -1) {
        this.messageService.add({ key: 'toast', severity: 'warn', summary: 'Error', detail: res.message });
      }
      else if (res.status == 200) {
        this.messageService.add({ key: 'toast', severity: 'success', summary: 'Deleted ', detail: res.message });
        // alert('Data  is added in DB')
        this.addAdmin.controls['updatedAt'].setValue(new Date())
        this.addAdmin.controls['createdAt'].setValue(new Date())
        this.listOfAdmins.pop()
        this.listOfAdmins = this.listOfAdmins.filter(obj => obj._id !== this.deleteId)
        // this.foo_objects = this.foo_objects.filter(obj => return obj !== foo_object);
      }
      else {
        this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: res.message });
      }
      this.messageService.clear('c');
    }, err => {
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: err.message });
      console.error(err)

      this.messageService.clear('c');
    })
  }
  onReject() {
    this.deleteId = "";
    this.messageService.clear('c');

  }

  clear() {
    this.messageService.clear();
  }






}
