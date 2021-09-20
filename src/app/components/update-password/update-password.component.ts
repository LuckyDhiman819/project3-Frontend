import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  password:String = "";
  confirm_password:String = "";
  customerForgetPasswordForm!: FormGroup;
  Id?:number;
  message?:String;
// public activatedRoute:ActivatedRoute
// this.Id = this.activatedRoute.snapshot.params['Id'];

  constructor(public activatedRoute:ActivatedRoute,public formBuilder:FormBuilder,public router:Router) { }

  ngOnInit(): void {



    this.Id = this.activatedRoute.snapshot.params['Id'];
    this.Id = -1;
    if(this.Id == -1){

    this.customerForgetPasswordForm = this.formBuilder.group({
      customerUserName : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      password : ['',Validators.required],
      confirm_password : ['',Validators.required]
    })
    }
    else{
      this.customerForgetPasswordForm = this.formBuilder.group({
        customerUserName : [this.Id, Validators.required],
        phoneNumber : ['',Validators.required],
        password : ['',Validators.required],
        confirm_password : ['',Validators.required]
      })

    }

 
  }

  passwordMatch(password:String, confirm_password:String){
    
    if(password===confirm_password){
      return false;
    }
    return true;
  }
  saveData(){
    console.log(this.customerForgetPasswordForm.value);
    // this.adminService.resetPassword(this.customerForgetPasswordForm.value,this.customerForgetPasswordForm.value.adminId)
    //     .subscribe(
    //       response => {
    //         console.log(response);
    //         this.message = "Your passowrd saved sucessfully"
    //         console.log("#######Updated successfully and navigating");
    //         // this.router.navigate(['patientDashBoard'])
    //       },
    //       error => {
    //         console.log(error);
    //  });
  }
 Back(){

  if(this.Id == -1){
    this.router.navigate(["adminLogin"])

  }else{

    this.router.navigate(["editProfile", this.Id])
  }
 }
}
