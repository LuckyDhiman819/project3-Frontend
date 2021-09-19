import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pick-and-drop',
  templateUrl: './pick-and-drop.component.html',
  styleUrls: ['./pick-and-drop.component.css']
})
export class PickAndDropComponent {

  errorMessage?: string;
  successMessage?: string;
   PickDropForm:FormGroup;
   submitted=false;

  constructor(private formBuilder:FormBuilder, public router:Router,public customerService:CustomerService ) { }

  ngOnInit() {
    this.PickDropForm=this.formBuilder.group({
      pickupDropId:['',Validators.required] ,
      typeOfTransport:['',Validators.required] ,
      time:['',Validators.required] ,
      numberOfPassenger:['',Validators.required],
      location: ['', Validators.required],   

       });
  }

  onSubmit(){
      this.submitted=true;
      console.log(this.PickDropForm.value)
      console.log('Sucess!! '+ "\nLocation - " + this.f.location.value + "\nTransport - " + this.f.typeOfTransport.value + "\nTime - " + this.f.time.value + "\nNumber of Passengers - " + this.f.numberOfPassenger.value);
      this.customerService.addPickAndDrop(this.PickDropForm.value)
      .subscribe(
          response => {
            console.log(response);
            // this.router.navigate([''])
            this.successMessage = "Pickup And Drop added successfully"
            console.log("#######Pickup And Drop Uploaded successfully ");
          },
          error => {
            this.errorMessage = "Admit Form Cancel"
            console.log("ERROR in save : " + error);
          });
  
    }
  get f(){
    return this.PickDropForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.PickDropForm.reset();
  }
}
