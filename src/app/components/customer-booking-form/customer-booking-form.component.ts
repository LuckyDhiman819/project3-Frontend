import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-booking-form',
  templateUrl: './customer-booking-form.component.html',
  styleUrls: ['./customer-booking-form.component.css']
})
export class CustomerBookingFormComponent implements OnInit {

  bookingForm!: FormGroup;
  errorMessage?: string;
  successMessage?: string;

  Id?:any;
  booking:Booking[]=[];
  roomType=["Semi Delux","Delux","Luxary","Presedential suite"] 
  userName?:String;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  constructor(public formBuilder:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute, public customerService:CustomerService) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    console.log(this.userName)

    this.bookingForm= this.formBuilder.group({
      customerUserName : [this.userName,Validators.required],
      customerName : ['',Validators.required],
      idProof : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      roomType : ['',Validators.required],
      numberOfRoom : ['',Validators.required],
      numberOfMembers: ['',Validators.required],
      customerMobileno : ['',Validators.required],
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


    this.customerService.bookingForm(this.bookingForm.value).subscribe(
      data => {
        this.Id = data;
        console.log(this.Id);
        if(this.bookingForm.value.pickUpAndDrop == "yes"){
          this.router.navigate(["addPickAndDrop", this.userName, this.Id]);
        }
        else{
          this.router.navigate(["addPickAndDrop", this.userName]);
        }
      }, 
      error => {
        this.errorMessage = "Admit Form Cancel"
        console.log("ERROR in save : " + error);
      });
  }


  Back(){
    this.router.navigate(["customerDashboard", this.userName]);
  }
  next(){
    
  }


}
