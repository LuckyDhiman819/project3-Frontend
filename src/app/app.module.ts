import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ConactComponent } from './components/conact/conact.component';
import { AboutComponent } from './components/about/about.component';

import { PickAndDropComponent } from './components/pick-and-drop/pick-and-drop.component';

import { ViewBookingHistoryComponent } from './components/view-booking-history/view-booking-history.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerBookingFormComponent } from './components/customer-booking-form/customer-booking-form.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { BillingComponent } from './components/billing/billing.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    RoomsComponent,
    BlogsComponent,
    ElementsComponent,
    ConactComponent,
    AboutComponent,
    PickAndDropComponent,
    CustomerloginComponent,
    ViewBookingHistoryComponent,
    CustomerSignupComponent,
    CustomerBookingFormComponent,
    CancelBookingComponent,
    BillingComponent,

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
