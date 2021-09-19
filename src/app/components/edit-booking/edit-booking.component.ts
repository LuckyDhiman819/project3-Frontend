import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  
  errMessage : string = "";
  message?:String;
  bookongEditForm !: FormGroup;
  adminId?:number;
  
  

  details = false;
  lable = "Edit";
  readonly = true;
  Id?:number;
  SuccessMsg?:String;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];


  constructor(public activatedRoute: ActivatedRoute,public formBuilder:FormBuilder,public router:Router) { 
  }

  ngOnInit(): void {
    // this.employees = this.employeeDetailService.getEmployee();
    //Model Driven FormBuilder
    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.getProfile();

    // this.employeeDetailService.getNewEmployee().subscribe(result => this.employees = result,err => this.errMessage =err)
  }

  saveEmployee(){
    console.log(this.bookongEditForm.value)
    // this.employeeDetailService.createEmployee(this.adminSignUpForm.value).subscribe();
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
    this.bookongEditForm= this.formBuilder.group({
      customerUserName : ['',Validators.required],
      idProof : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      roomType : ['',Validators.required],
      numberOfRoom : ['',Validators.required],
      roomSize : ['',Validators.required],
      breakfast : ['',Validators.required],
      drinks : ['',Validators.required],
      checkInDate : ['',Validators.required],
      checkOutDate : ['',Validators.required],
      pickUpAndDrop : ['',Validators.required]
    })
    // },
    //   error => console.log(error)
    // )
  }

  updateBooking(){
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
