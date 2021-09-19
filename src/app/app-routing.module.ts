import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './components/about/about.component';
import { BillingComponent } from './components/billing/billing.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { CancelPickupanddropComponent } from './components/cancel-pickupanddrop/cancel-pickupanddrop.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CustomerBookingFormComponent } from './components/customer-booking-form/customer-booking-form.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { EditBookingComponent } from './components/edit-booking/edit-booking.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { UpdatePickupanddropComponent } from './components/update-pickupanddrop/update-pickupanddrop.component';
import { ViewBookingHistoryComponent } from './components/view-booking-history/view-booking-history.component';
import { PickupAndDrop } from './models/pickup-and-drop';

const routes: Routes = [

  { path:"",component: HomeComponent },
  { path:"about",component: AboutComponent },
  { path:"contactUs",component: ContactUsComponent },
  { path:"blogs",component: BlogsComponent },

  { path:"cancelBooking",component: CancelBookingComponent },
  { path:"editBooking",component: EditBookingComponent },

  { path:"billing",component: BillingComponent },

  { path:"customerBooking",component: CustomerBookingFormComponent },
  { path:"customerSignUp",component: CustomerSignupComponent },
  { path:"customerLogin",component: CustomerloginComponent },
  { path:"editCustomer",component: EditCustomerComponent },

  { path:"updatePickAndDrop",component: UpdatePickupanddropComponent },
  { path:"addPickAndDrop",component: PickupAndDrop },
  { path:"cancelPickAndDrop",component: CancelPickupanddropComponent },

  { path:"contactUs",component: ContactUsComponent },
  
  { path:"rooms",component: RoomsComponent },
  { path:"updatePassword",component: UpdatePasswordComponent },
  
  { path:"viewBookingHistory",component: ViewBookingHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
