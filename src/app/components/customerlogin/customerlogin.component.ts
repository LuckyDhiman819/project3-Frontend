import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

customerLoginForm! : FormGroup;
  errorMessage?:String;
  adminId?:number;

  constructor(public formBuilder:FormBuilder, public router:Router) { 
  }

  ngOnInit(): void {
    this.customerLoginForm = this.formBuilder.group({
      customerUserName : ['', Validators.required],
    password : ['', Validators.required]
    })
  }
  customerLogin(){
    
   
    
    // this.employeeDetailService.createEmployee(this.employeeForm.value).subscribe();
  }

  login(){
    // this.router.navigate(["adminDashBoard"])
  }
  sign_up(){
    // this.router.navigate(["adminSignup", -1])
    
  }
  back(){
    
    //this.router.navigate([""])
  }

  forgetPassword(){
    //this.router.navigate(["adminForgetPassword", -1]);
  }

}
