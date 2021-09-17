import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  paymentForm : FormGroup; 
  errorMessage?: string;
  successMessage?: string;
  Id?:number;
  // public activatedRoute:ActivatedRoute
  // this.Id = this.activatedRoute.snapshot.params['id'];
  
  // bills : Bill[]
  constructor(public customerService: CustomerService, public router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.viewBillHistory();
  }

  viewBillHistory(){
    // this.customerService.viewBill(this.Id).subscribe((data: any[])=>{
    //   console.log("###Biils recieved from spring :")
    //   console.log(data);
    //   // this.bills = data;
  //   },err => this.errorMessage = err) 
  }
  Back(){

    // this.router.navigate(["patientDashBoard", this.Id]);

  }
  PaymentDone(){
    
  }
}
