import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PickupAndDrop } from 'src/app/models/pickup-and-drop';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-pickupanddrop',
  templateUrl: './update-pickupanddrop.component.html',
  styleUrls: ['./update-pickupanddrop.component.css']
})
export class UpdatePickupanddropComponent implements OnInit {

  errorMessage?: string;
  successMessage?: string;
   PickDropForm:FormGroup;
   submitted=false;
   details = false;
  lable = "Edit";
  readonly = true;
  Id?:number = 103;
  SuccessMsg?:String;
  pickupAndDrop?:PickupAndDrop;

  constructor(private formBuilder:FormBuilder, public router:Router,public customerService:CustomerService ) { }

  ngOnInit() {
    this.PickDropForm=this.formBuilder.group({
      pickupAndDropId:['',Validators.required] ,
      typeOfTransport:['',Validators.required] ,
      time:['',Validators.required] ,
      numberOfPassenger:['',Validators.required],
      location: ['', Validators.required],   

       });

       document.getElementById("display1").style.display = "none";
    document.getElementById("display2").style.display = "none";
    document.getElementById("display3").style.display = "none";
    document.getElementById("display4").style.display = "none";
  }

  onSubmit(){
      this.submitted=true;
      console.log(this.PickDropForm.value)
      console.log('Sucess!! '+ "\nLocation - " + this.f.location.value + "\nTransport - " + this.f.typeOfTransport.value + "\nTime - " + this.f.time.value + "\nNumber of Passengers - " + this.f.numberOfPassenger.value);
      this.customerService.updatePickAndDrop(this.PickDropForm.value, 103)
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

  show(){
      
    this.customerService.getPickAndDrop(this.Id).subscribe(
      data=>{
        console.log(data);
        this.pickupAndDrop = data;
        this.details = true;
        
        this.readonly = false;
    
      this.PickDropForm=this.formBuilder.group({
      
      typeOfTransport:[this.pickupAndDrop.typeOfTransport,Validators.required] ,
      time:[this.pickupAndDrop.time,Validators.required] ,
      numberOfPassenger:[this.pickupAndDrop.numberOfPassenger,Validators.required],
      location: [this.pickupAndDrop.location, Validators.required],   

       });
    document.getElementById("display1").style.display = "flex";
    document.getElementById("display2").style.display = "flex";
    document.getElementById("display3").style.display = "flex";
    document.getElementById("display4").style.display = "flex";
    
  },
  error => console.log(error)
    )
  }
  readOnly(){
    this.readonly = true;
    document.getElementById("display1").style.display = "none";
    document.getElementById("display2").style.display = "none";
    document.getElementById("display3").style.display = "none";
    document.getElementById("display4").style.display = "none";

  }
  Back(){

  }


}
