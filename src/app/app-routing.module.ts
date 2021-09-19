import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './components/billing/billing.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:"",component: HomeComponent },
  { path:'billing',component: BillingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
