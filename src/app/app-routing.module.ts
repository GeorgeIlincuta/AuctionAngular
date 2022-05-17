import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './pages/auction/auction.component';
import { ForgotComponent } from './form/forgot/forgot.component';
import { LoginComponent } from './form/login/login.component';
import { RegisterComponent } from './form/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  { path:'', component:AuctionComponent},
  { path:'auctions', component:AuctionComponent, canActivate: [AuthGuard]},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'forgot', component:ForgotComponent},
  { path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
