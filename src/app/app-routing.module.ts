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
import { NavbarComponent } from './components/navbar/navbar.component';
import { PickAndDropComponent } from './components/pick-and-drop/pick-and-drop.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { TermAndConditionComponent } from './components/term-and-condition/term-and-condition.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { UpdatePickupanddropComponent } from './components/update-pickupanddrop/update-pickupanddrop.component';
import { ViewBookingHistoryComponent } from './components/view-booking-history/view-booking-history.component';

const routes: Routes = [
  // { path:"",component: HomeComponent },
  // { path:"customerDashboard", component:HomeComponent},
  { path:"customerDashboard/:userName", component:HomeComponent},
  { path:"about/:userName",component: AboutComponent },
  { path:"contactUs",component: ContactUsComponent },
  { path:"blogs",component: BlogsComponent },
  { path:"termAndCondition",component: TermAndConditionComponent },
  { path:"cancelBooking/:userName",component: CancelBookingComponent },
  { path:"editBooking/:userName",component: EditBookingComponent },
  { path:"billing",component: BillingComponent },
  { path:"customerBooking/:userName",component: CustomerBookingFormComponent },
  // { path:"customerSignUp",component: CustomerSignupComponent },
  { path:"customerSignUp/:userName",component: CustomerSignupComponent },
  { path:"customerLogin/:userName",component: CustomerloginComponent },
  { path:"",component: CustomerloginComponent },
  // { path:"editCustomer",component: EditCustomerComponent },
  { path:"editCustomer/:userName",component: EditCustomerComponent },
  { path:"updatePickAndDrop/:userName",component: UpdatePickupanddropComponent },
  { path:"addPickAndDrop/:userName/:Id",component: PickAndDropComponent },
  { path:"cancelPickAndDrop/:userName",component: CancelPickupanddropComponent },
  { path:"contactUs/:userName",component: ContactUsComponent },
  { path:"rooms/:userName",component: RoomsComponent },
  { path:"navbar/:userName",component: NavbarComponent },
  // { path:"updatePassword",component: UpdatePasswordComponent },
  { path:"updatePassword/:userName",component: UpdatePasswordComponent },
  { path:"viewBookingHistory/:userName",component: ViewBookingHistoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
