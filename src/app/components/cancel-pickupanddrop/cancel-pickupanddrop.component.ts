import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cancel-pickupanddrop',
  templateUrl: './cancel-pickupanddrop.component.html',
  styleUrls: ['./cancel-pickupanddrop.component.css']
})
export class CancelPickupanddropComponent implements OnInit {
  cancelPickupAndDrop: FormGroup;
  errorMessage?:String;
  pickupAndDropId? : number;

  constructor(public formBuilder:FormBuilder, public router:Router,public customerService:CustomerService) { 
  }

  ngOnInit(): void {
    this.cancelPickupAndDrop = this.formBuilder.group({
      pickupAndDropId : ['', Validators.required],
      customerUserName : ['', Validators.required],
      reason : ['', Validators.required]
    })

  }
  sendCancelPickupAndDrop(data: any){
    console.log(this.cancelPickupAndDrop?.value);
    console.log(data.pickupAndDropId);
  
    this.customerService.cancelPickAndDrop(data.pickupAndDropId)
      .subscribe(
        response => {
          console.log(response);
          // this.successMessage = doctorId +" :   successfully deleted";
          console.log("#######Deleted successfully ");
        },
        error => {
          console.log(error);
        });
  }
  Back(){
    //this.router.navigate([""])
  }

}
