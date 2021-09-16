import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-booking-form',
  templateUrl: './customer-booking-form.component.html',
  styleUrls: ['./customer-booking-form.component.css']
})
export class CustomerBookingFormComponent implements OnInit {

  bookingForm!: FormGroup;
  errorMessage?: string;
  successMessage?: string;
  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.bookingForm= this.formBuilder.group({
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
  }

  sendbookingForm(){
    console.log(this.bookingForm?.value);

  }

  Back(){
  }


}
