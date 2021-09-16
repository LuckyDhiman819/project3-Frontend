import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
  customerSignUpForm! : FormGroup;
  password :String = "";
  confirm_password :String = "";
  Id?:number;

  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['Id'];
    //Model Driven FormBuilder
    this.customerSignUpForm = this.formBuilder.group({
      customerUserName : ['', [Validators.required, Validators.minLength(5)]],
      customerName : ['',[Validators.required, Validators.minLength(5)]],     
      password : ['',[Validators.required,Validators.minLength(5)]],
      confirm_password : ['',[Validators.required,Validators.minLength(5)]],
      email : ['',[Validators.required,Validators.email]],
      gender : ['', Validators.required],
      mobileNumber : ['', Validators.required],
      age : ['', Validators.required],
      city : ['', Validators.required],
      state : ['', Validators.required],
      country : ['', Validators.required],
      idProof : ['', Validators.required]
  })

  }

  saveCustomer(){
    console.log(this.customerSignUpForm.value)

  }

  passwordMatch(password:String, confirm_password:String) {
    if(password===confirm_password){
      return false;
    }
    return true;

  }

  login() {

  }

  dashboard() {

  }
}