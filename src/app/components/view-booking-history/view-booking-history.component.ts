import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-booking-history',
  templateUrl: './view-booking-history.component.html',
  styleUrls: ['./view-booking-history.component.css']
})
export class ViewBookingHistoryComponent implements OnInit {
  errorMessage?: string;
  successMessage?: string;

  bookings!: Booking[];

  constructor( public customerService:CustomerService,public router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    ///as
    // this.Id = this.activatedRoute.snapshot.params['id'];
    // this.getAppointmentHistory();
  }

  getBookingHistory(){
  //   this.customerService.viewBookingHistory(this.Id).subscribe((data: any[]) => {
  //     console.log("###Booking recieved from spring :")
  //     console.log(data);
  //     this.bookings = data;
  //   }, err => this.errorMessage = err)
  }
  Back(){
  //   this.router.navigate(["customerDashBoard", this.Id]);

  }
}
