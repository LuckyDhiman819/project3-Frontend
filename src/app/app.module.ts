import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerFooterComponent } from './components/customer-footer/customer-footer.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { CustomerBlogsComponent } from './components/customer-blogs/customer-blogs.component';
import { ElementsComponent } from './components/elements/elements.component';
import { CustomerAboutComponent } from './components/customer-about/customer-about.component';

import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { EditBookingComponent } from './components/edit-booking/edit-booking.component';


import { PickAndDropComponent } from './components/pick-and-drop/pick-and-drop.component';

import { ViewBookingHistoryComponent } from './components/view-booking-history/view-booking-history.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerBookingFormComponent } from './components/customer-booking-form/customer-booking-form.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';

import { CancelPickupanddropComponent } from './components/cancel-pickupanddrop/cancel-pickupanddrop.component';
import { UpdatePickupanddropComponent } from './components/update-pickupanddrop/update-pickupanddrop.component';

import { CustomerBillingComponent } from './components/customer-billing/customer-billing.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TermAndConditionComponent } from './components/term-and-condition/term-and-condition.component';
import { ConfirmBookingComponent } from './components/confirm-booking/confirm-booking.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { AddMoneyToWalletComponent } from './components/add-money-to-wallet/add-money-to-wallet.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDashboardComponent,
    CustomerFooterComponent,
    CustomerNavbarComponent,
    RoomsComponent,
    CustomerBlogsComponent,
    ElementsComponent,
    CustomerAboutComponent,
    EditCustomerComponent,
    UpdatePasswordComponent,
    EditBookingComponent,
    PickAndDropComponent,
    CustomerloginComponent,
    ViewBookingHistoryComponent,
    CustomerSignupComponent,
    CustomerBookingFormComponent,
    CancelBookingComponent,
    CancelPickupanddropComponent,
    UpdatePickupanddropComponent,
    CustomerBillingComponent,
    ContactUsComponent,
    TermAndConditionComponent,
    ConfirmBookingComponent,
    WalletComponent,
    AddMoneyToWalletComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
