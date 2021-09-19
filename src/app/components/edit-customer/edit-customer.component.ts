import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  
  errMessage : string = "";
  message?:String;
  customerEditForm !: FormGroup;
  adminId?:number;
  
  

  details = false;
  lable = "Edit";
  readonly = true;
  Id?:number;
  SuccessMsg?:String;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];

  customer?:Customer;
  constructor(public activatedRoute: ActivatedRoute,public formBuilder:FormBuilder,public router:Router, public customerServices: CustomerService) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.getProfile();

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.customerEditForm.value)
    
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;

  }

  show(){
    this.details = true;  
    this.readonly = false;
  }
  readOnly(){
    this.readonly = true;
  }
  

  getProfile(){
    // this.adminId = this.activatedRoute.snapshot.params['adminId'];
    // this.adminServices.getAdminById(this.Id)
    // .subscribe(data => {
    //   this.admin = data
    //   console.log(this.admin, "ggggggggggggggggg"),
    this.customerEditForm = this.formBuilder.group({
      customerUserName : ['', [Validators.required, Validators.minLength(5)]],
      customerName : ['',[Validators.required, Validators.minLength(5)]],     
      email : ['',[Validators.required,Validators.email]],
      gender : ['', Validators.required],
      mobileNumber : ['', Validators.required],
      age : ['', Validators.required],
      city : ['', Validators.required],
      state : ['', Validators.required],
      country : ['', Validators.required],
      idProof : ['', Validators.required]
    })
    // },
    //   error => console.log(error)
    // )
  }

  editCustomer(){
    // console.log(this.adminEditForm.value)
    // this.adminServices.editProfile(this.adminEditForm.value,this.Id)
    //     .subscribe(
    //       response => {
    //         console.log(response);
    //         console.log("#######Updated successfully and navigating");
    //         this.SuccessMsg = "Details Update Successfully.....";
    //         // this.router.navigate(['patientDashBoard'])
    //       },
    //       error => {
    //         this.errMessage = "Data not saved"
    //         console.log(error);
    //       });
  }

forgetPassword(){
  // this.router.navigate(["adminForgetPassword", this.Id]);
}
Back(){
  // this.router.navigate(["adminDashBoard", this.Id]);
}


}
