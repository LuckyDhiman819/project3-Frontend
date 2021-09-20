import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  paymentDone(){
    this.router.navigate(['billing']);
  }

  cancel(){
    this.router.navigate(['']);
  }
}
