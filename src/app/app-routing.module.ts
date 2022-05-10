import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './auction/auction.component';
import { ForgotComponent } from './form/forgot/forgot.component';
import { LoginComponent } from './form/login/login.component';
import { RegisterComponent } from './form/register/register.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'auctions', component:AuctionComponent},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'forgot', component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
